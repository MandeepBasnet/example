import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, CheckCircle2 } from 'lucide-react';
import { Badge, Progress } from './ui';
import { ImageWithFallback } from './ImageWithFallback';

export function ProjectCard({ project }) {
  const percentageFunded = Math.round((project.raised / project.goal) * 100);
  
  const imageMap = {
    "agriculture technology": "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTYzNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "traditional nepal art": "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "clean water community": "https://images.unsplash.com/photo-1538300342682-cf57afb97285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "eco friendly packaging": "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "artisan marketplace mobile": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "coding bootcamp education": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  };

  return (
    <Link to={`/campaigns/${project.id}`} className="group h-full block">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <ImageWithFallback 
            src={imageMap[project.image] || imageMap["agriculture technology"]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-gray-900 hover:bg-white border-none shadow-sm backdrop-blur-sm">
              {project.category}
            </Badge>
          </div>
          {project.milestoneVerified && (
            <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="mb-2 font-bold text-lg text-slate-900 line-clamp-2 group-hover:text-sky-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mb-4">by <span className="font-medium text-slate-700">{project.creator}</span></p>

          <div className="mt-auto space-y-4">
            {/* Progress */}
            <div className="space-y-2">
              <Progress value={percentageFunded} className="h-2" />
              
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    Rs. {project.raised.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    of Rs. {project.goal.toLocaleString()} goal
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 font-bold">{percentageFunded}%</div>
                  <div className="text-xs text-gray-500">funded</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Users className="w-4 h-4" />
                <span>{project.backers} backers</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{project.daysLeft} days left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
