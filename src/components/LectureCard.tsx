import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface LectureCardProps {
  title: string;
  author: string;
  duration: string;
  views: number;
  rating: number;
  tags: string[];
  thumbnail: string;
  type: "video" | "pdf" | "presentation";
}

const LectureCard: React.FC<LectureCardProps> = ({
  title,
  author,
  duration,
  views,
  rating,
  tags,
  thumbnail,
  type,
}) => {
  const getTypeIcon = () => {
    switch (type) {
      case "video":
        return "Play";
      case "pdf":
        return "FileText";
      case "presentation":
        return "Presentation";
      default:
        return "File";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/90">
            <Icon name={getTypeIcon()} size={14} className="mr-1" />
            {duration}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <div className="flex items-center space-x-1 bg-background/90 rounded-full px-2 py-1">
            <Icon
              name="Star"
              size={14}
              className="text-yellow-500 fill-current"
            />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>от {author}</span>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={14} />
            <span>{views.toLocaleString()}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LectureCard;
