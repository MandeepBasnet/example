import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Heart, Share2, PlayCircle, ExternalLink, ShieldCheck, Wallet, CheckCircle2
} from 'lucide-react';
import { Button, Card, Badge, Progress, Tabs, TabsList, TabsTrigger, TabsContent, Avatar } from '../components/ui';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { MilestoneTimeline } from '../components/MilestoneTimeline';
import { RewardTier } from '../components/RewardTier';
import { campaignData } from '../mockData';

export function CampaignDetail() {
  const [selectedReward, setSelectedReward] = useState(null);
  
  const percentageFunded = Math.round((campaignData.raised / campaignData.goal) * 100);

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Campaign Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Column: Media */}
            <div className="space-y-6">
               <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative group shadow-lg">
                <ImageWithFallback 
                  src={campaignData.image}
                  alt={campaignData.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all hover:scale-110">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 overflow-x-auto pb-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="h-20 w-32 bg-slate-200 rounded-lg flex-shrink-0 overflow-hidden cursor-pointer hover:ring-2 ring-blue-500">
                     <ImageWithFallback src={campaignData.image} className="w-full h-full object-cover"/>
                   </div>
                 ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1">{campaignData.category}</Badge>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <span>{campaignData.location}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{campaignData.title}</h1>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">A revolutionary way to help local farmers using smart technology to increase yields and sustainability.</p>
                
                <div className="flex items-center gap-4 mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <Avatar className="h-12 w-12" fallback="TF" />
                  <div>
                    <div className="text-sm text-gray-500 mb-0.5">Created by</div>
                    <div className="font-bold text-slate-900">{campaignData.creator}</div>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto text-xs">View Profile</Button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-4xl font-bold text-slate-900">Rs. {campaignData.raised.toLocaleString()}</span>
                      <span className="text-slate-500 font-medium">{percentageFunded}%</span>
                    </div>
                    <Progress value={percentageFunded} className="h-3 bg-slate-100" />
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>pledged of Rs. {campaignData.goal.toLocaleString()} goal</span>
                      <span>{campaignData.daysLeft} days left</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{campaignData.backers}</div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Backers</div>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{campaignData.daysLeft}</div>
                      <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Days Left</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button size="lg" className="w-full text-base h-12 font-bold bg-blue-600 hover:bg-blue-700 shadow-md">
                      Back this Project
                    </Button>
                    <div className="flex gap-3">
                      <Button size="lg" variant="outline" className="flex-1 text-slate-600">
                        <Heart className="w-5 h-5 mr-2" /> Save
                      </Button>
                      <Button size="lg" variant="outline" className="flex-1 text-slate-600">
                        <Share2 className="w-5 h-5 mr-2" /> Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-8 space-x-8">
              <TabsTrigger value="story" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 text-slate-500 font-medium text-base px-0 py-4 bg-transparent shadow-none">
                Campaign Story
              </TabsTrigger>
              <TabsTrigger value="milestones" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 text-slate-500 font-medium text-base px-0 py-4 bg-transparent shadow-none">
                Milestones & Roadmap
              </TabsTrigger>
              <TabsTrigger value="updates" className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 text-slate-500 font-medium text-base px-0 py-4 bg-transparent shadow-none">
                Updates <Badge variant="secondary" className="ml-2 bg-slate-100">3</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="animate-in fade-in-50 slide-in-from-left-5">
              <Card className="p-8 border-none shadow-none bg-transparent">
                <div className="prose max-w-none text-slate-700 leading-relaxed">
                  <p className="mb-6 text-lg">{campaignData.story}</p>
                </div>

                <div className="mt-10 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Fundora Milestone Guarantee</h3>
                      <p className="text-slate-600 leading-relaxed">
                        This project is protected by our Milestone Verification System. Funds are released to the creator only after they submit verified proof of completing each stage. Your pledge is secure.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="milestones" className="animate-in fade-in-50 slide-in-from-left-5">
              <div className="space-y-6">
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-2xl font-bold text-slate-900">Project Roadmap</h2>
                  <p className="text-slate-500">4 Milestones Total</p>
                </div>
                <MilestoneTimeline milestones={campaignData.milestones} />
              </div>
            </TabsContent>

            <TabsContent value="updates" className="animate-in fade-in-50 slide-in-from-left-5">
              <div className="space-y-8">
                <Card className="p-6 border-l-4 border-l-blue-600 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Update #3</Badge>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Field Testing Phase Completed Successfully!</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We're excited to announce that our field testing phase has been completed with outstanding results...
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-8">
          {/* Payment Methods Card */}
          <Card className="p-6 bg-slate-50 border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-slate-500" />
              Secure Payment Options
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                <span className="font-medium text-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-[10px] font-bold">eS</div>
                  eSewa
                </span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                <span className="font-medium text-sm flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-[10px] font-bold">K</div>
                  Khalti
                </span>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </Card>

          {/* Rewards */}
          <div>
            <h3 className="font-bold text-xl text-slate-900 mb-6">Support this Project</h3>
            <div className="space-y-4">
              {campaignData.rewards.map((reward) => (
                <RewardTier 
                  key={reward.id} 
                  reward={reward}
                  selected={selectedReward === reward.id}
                  onSelect={() => setSelectedReward(reward.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
