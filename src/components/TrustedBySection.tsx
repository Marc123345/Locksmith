import { motion } from "framer-motion";

export const TrustedBySection = () => {
  const trustedByImages = [
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Professional Security Solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Advanced Lock Technology"
    },
    {
      src: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Smart Home Security"
    },
    {
      src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Commercial Security Systems"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Residential Lock Services"
    }
  ];

  return (
    <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm xs:text-base text-muted-foreground mb-6">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-12">
            {trustedByImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-28 xs:w-36 md:w-44 lg:w-48 h-auto transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};