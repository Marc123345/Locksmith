import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  featuredImage?: string;
  category?: string;
  location?: string;
  tags?: string[];
}

export const BlogCard = ({
  slug,
  title,
  excerpt,
  publishedDate,
  featuredImage,
  category,
  location,
  tags = [],
}: BlogCardProps) => {
  const formattedDate = new Date(publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {featuredImage && (
        <Link to={`/blog/${slug}`} className="block overflow-hidden">
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </Link>
      )}

      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>

          {location && (
            <>
              <span className="text-muted-foreground/50">•</span>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </>
          )}

          {category && (
            <>
              <span className="text-muted-foreground/50">•</span>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span className="text-primary font-medium">{category}</span>
              </div>
            </>
          )}
        </div>

        <Link
          to={`/blog/${slug}`}
          className="hover:text-primary transition-colors"
        >
          <h3 className="text-xl font-bold leading-tight line-clamp-2">
            {title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <Link to={`/blog/${slug}`} className="flex items-center justify-center">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
