import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from 'lucide-react';
import { useSafeState } from '@/hooks/useSafeState';
import { AppError, handleError } from '@/utils/errorHandling';
import { supabase } from '@/lib/supabase';

const formSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Invalid email address')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9+\-() ]+$/, 'Invalid phone number format'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  pageSource?: string;
  serviceType?: string;
  locationPreference?: string;
}

const ContactForm = ({ pageSource, serviceType, locationPreference }: ContactFormProps = {}) => {
  const [isSubmitting, setIsSubmitting] = useSafeState(false);
  const [submitError, setSubmitError] = useSafeState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useSafeState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);
      
      // Validate phone number format
      if (!/^[0-9+\-() ]+$/.test(data.phone)) {
        throw new AppError('Invalid phone number format', 'INVALID_PHONE');
      }

      // Insert into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          page_source: pageSource,
          service_type: serviceType,
          location_preference: locationPreference,
        }]);

      if (error) {
        throw new AppError('Failed to submit form', 'SUBMISSION_ERROR', { details: error });
      }

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      handleError(error);
      setSubmitError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <Input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Your name"
          className={errors.name ? 'border-red-500' : ''}
          aria-invalid={errors.name ? 'true' : 'false'}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <Input
          {...register('email')}
          type="email"
          id="email"
          placeholder="your@email.com"
          className={errors.email ? 'border-red-500' : ''}
          aria-invalid={errors.email ? 'true' : 'false'}
          disabled={isSubmitting}
          autoComplete="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone
        </label>
        <Input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="Your phone number"
          className={errors.phone ? 'border-red-500' : ''}
          aria-invalid={errors.phone ? 'true' : 'false'}
          disabled={isSubmitting}
          autoComplete="tel"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <Textarea
          {...register('message')}
          id="message"
          rows={4}
          placeholder="How can we help you?"
          className={errors.message ? 'border-red-500' : ''}
          aria-invalid={errors.message ? 'true' : 'false'}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md" role="alert">
          {submitError}
        </div>
      )}

      {submitSuccess && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md" role="alert">
          Thank you for your message. We will get back to you soon!
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting || !isValid}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

export default React.memo(ContactForm);