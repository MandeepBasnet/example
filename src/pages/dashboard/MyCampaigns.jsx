import React from 'react';
import { PlusCircle, MoreVertical, Edit3, Eye, BarChart2 } from 'lucide-react';
import { Button, Card, Badge, Progress } from '../../components/ui';
import { creatorCampaigns } from '../../mockData';

export function MyCampaigns() {
  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-700 border-green-200';
      case 'draft': return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'completed': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Campaigns</h1>
          <p className="text-slate-500">Manage your fundraising projects</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
          <PlusCircle className="h-4 w-4" /> Create New
        </Button>
      </div>

      <div className="space-y-4">
        {creatorCampaigns.map((campaign) => (
          <Card key={campaign.id} className="p-5 hover:shadow-md transition-shadow border-slate-200">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image */}
              <div className="w-full md:w-48 h-32 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg text-slate-900">{campaign.title}</h3>
                        <Badge variant="outline" className={getStatusColor(campaign.status)}>
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">Created on Jan 15, 2024 • ID: #{campaign.id}</p>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {campaign.status !== 'draft' && (
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-slate-900">Rs. {campaign.raised.toLocaleString()}</span>
                      <span className="text-slate-500">{Math.round((campaign.raised/campaign.goal)*100)}% of Rs. {campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(campaign.raised/campaign.goal)*100} className="h-2" />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex md:flex-col gap-2 justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                <Button variant="outline" size="sm" className="justify-start gap-2">
                  <Edit3 className="h-4 w-4" /> Edit
                </Button>
                <Button variant="outline" size="sm" className="justify-start gap-2">
                  <BarChart2 className="h-4 w-4" /> Stats
                </Button>
                <Button variant="ghost" size="sm" className="justify-start gap-2 text-blue-600">
                  <Eye className="h-4 w-4" /> View
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
