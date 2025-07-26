
import { Heart, Eye, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface App {
  id: number;
  title: string;
  category: string;
  platform: string;
  image: string;
  likes: number;
  views: number;
  tags: string[];
}

interface AppCardProps {
  app: App;
  viewMode: 'grid' | 'list';
}

const AppCard = ({ app, viewMode }: AppCardProps) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
        <div className="flex items-center gap-6">
          <div className="relative overflow-hidden rounded-lg bg-gray-100 w-20 h-36 flex-shrink-0">
            <img 
              src={app.image} 
              alt={app.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{app.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{app.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3" />
                    {app.platform}
                  </span>
                </div>
              </div>
              
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
                <Download className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {app.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {app.likes}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {app.views}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100 aspect-[9/16]">
        <img 
          src={app.image} 
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute top-3 right-3">
          <Button variant="ghost" size="sm" className="bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm">
            <Download className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-2 text-xs text-white mb-2">
            <span className="bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm">{app.category}</span>
            <span className="bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              {app.platform}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {app.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
          {app.tags.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
              +{app.tags.length - 2}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            {app.likes}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {app.views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
