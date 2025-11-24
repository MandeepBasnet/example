import React from 'react';
import { CheckCircle2, XCircle, Eye, Clock, Calendar } from 'lucide-react';
import { Button, Card, Badge } from '../../components/ui';

export function CampaignQueue() {
  // Mock data for pending campaigns
  const pendingCampaigns = [
    {
      id: 101,
      title: "Community Library Project",
      creator: "Saraswati School",
      category: "Education",
      goal: 200000,
      submitted: "2024-03-21",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 102,
      title: "Urban Rooftop Gardens",
      creator: "Kathmandu Green",
      category: "Environment",
      goal: 150000,
      submitted: "2024-03-20",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 103,
      title: "Traditional Music Preservation",
      creator: "Folk Nepal",
      category: "Art & Culture",
      goal: 300000,
      submitted: "2024-03-19",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=300"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Campaign Approval Queue</h1>
          <p className="text-slate-500">Review and approve new campaign submissions</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-50 text-blue-700">8 Pending</Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700">Avg Time: 12h</Badge>
        </div>
      </div>

      <Card className="border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Goal</th>
                <th className="px-6 py-4">Submitted</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendingCampaigns.map((campaign) => (
                <tr key={campaign.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={campaign.image} alt="" className="w-10 h-10 rounded object-cover bg-slate-200" />
                      <div>
                        <div className="font-medium text-slate-900">{campaign.title}</div>
                        <div className="text-xs text-slate-500">by {campaign.creator}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary">{campaign.category}</Badge>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    Rs. {campaign.goal.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {campaign.submitted}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-600">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                        <CheckCircle2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
