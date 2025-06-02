import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">
          {post.description}
        </p>

        {/* Date and Read More */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{post.date}</span>
          </div>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2 text-sm font-medium group">
            READ MORE
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </article>
  );
}
