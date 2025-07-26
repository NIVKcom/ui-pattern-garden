
import { Play } from "lucide-react";

const VideoPromo = () => {
  const videos = [
    {
      id: 1,
      title: "Amazing UI Components for Modern Apps",
      description: "Jeff from Fireship talks about how our design system can help you build awesome landing pages with speed",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/lovable-uploads/d9f764cc-282a-461a-8213-623434a5b02f.png",
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Complete SaaS Application Built",
      description: "Watch Web Prodigies build an entire SaaS application from scratch with our design components",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/lovable-uploads/d9f764cc-282a-461a-8213-623434a5b02f.png",
      bgColor: "bg-gradient-to-br from-pink-400 to-red-500",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "Stunning Animations & Scroll Effects",
      description: "Josh from Josh Tried Coding talks about how our UI components can help your website stand out",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/lovable-uploads/d9f764cc-282a-461a-8213-623434a5b02f.png",
      bgColor: "bg-gradient-to-br from-purple-400 to-blue-600",
      textColor: "text-white"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See What Our Partners Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leading developers and creators share their experience using our design system
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-4xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`${video.bgColor} rounded-2xl p-8 cursor-pointer transform hover:scale-[1.02] transition-all duration-300 shadow-2xl`}
              onClick={() => handleVideoClick(video.videoId)}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative flex-shrink-0 group">
                  <div className="relative w-80 h-48 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded text-white text-sm">
                      Watch on YouTube
                    </div>
                  </div>
                </div>
                
                <div className={`flex-1 ${video.textColor} text-center lg:text-left`}>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-lg lg:text-xl opacity-90 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
