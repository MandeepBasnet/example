import React from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Button, Input, Card, Badge, Progress } from '../../components/ui';
import { creatorCampaigns } from '../../mockData'; // Reusing mock data for now

export function BrowseCampaigns() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Explore Campaigns</h1>
            <p className="text-slate-500">Discover projects that matter to you</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input placeholder="Search campaigns..." className="pl-10" />
            </div>
            <Button variant="outline">
              <SlidersHorizontal className="w-4 h-4 mr-2" /> Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block space-y-6">
            <Card className="p-6 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Categories
              </h3>
              <div className="space-y-3">
                {['Technology', 'Agriculture', 'Education', 'Health', 'Community', 'Art & Creative'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-slate-600 group-hover:text-blue-600 transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Funding Type</h3>
              <div className="space-y-3">
                {['All Types', 'Reward-based', 'Donation-based', 'Milestone-based'].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="fundingType" className="border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span className="text-slate-600 group-hover:text-blue-600 transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Campaign Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Using creatorCampaigns as placeholder data, duplicated to fill grid */}
              {[...creatorCampaigns, ...creatorCampaigns].map((campaign, index) => (
                <Card key={`${campaign.id}-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200 group cursor-pointer">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={campaign.image} 
                      alt={campaign.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
                      {campaign.daysLeft} Days Left
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Technology</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                      A revolutionary project to change the way we think about sustainable farming in Nepal.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-slate-900">Rs. {campaign.raised.toLocaleString()}</span>
                        <span className="text-slate-500">{Math.round((campaign.raised/campaign.goal)*100)}%</span>
                      </div>
                      <Progress value={(campaign.raised/campaign.goal)*100} className="h-2" />
                      <div className="flex justify-between items-center pt-2 text-xs text-slate-500">
                        <span>{campaign.backers} Backers</span>
                        <span>Goal: Rs. {campaign.goal.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12 gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
