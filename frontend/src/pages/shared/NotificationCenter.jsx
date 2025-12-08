import React, { useState } from 'react';
import { 
  Bell, Check, Clock, MessageSquare, DollarSign, ShieldAlert, Filter, Settings, Trash2 
} from 'lucide-react';
import { Button, Card, Badge, Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui';

export function NotificationCenter() {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    { id: 1, type: 'funding', title: "Campaign Goal Reached!", message: "Eco-Friendly Water Purifier has reached 100% funding.", time: "2m ago", read: false },
    { id: 2, type: 'message', title: "New Message", message: "TechFarm Nepal sent you a message.", time: "1h ago", read: false },
    { id: 3, type: 'system', title: "Milestone Approved", message: "Your milestone 'Prototype Testing' has been approved.", time: "5h ago", read: true },
    { id: 4, type: 'alert', title: "Action Required", message: "Please update your payment details.", time: "1d ago", read: true },
    { id: 5, type: 'funding', title: "New Backer", message: "John Doe pledged Rs. 5,000 to your campaign.", time: "2d ago", read: true },
    { id: 6, type: 'system', title: "Campaign Approved", message: "Your campaign 'Community Art Center' is now live!", time: "3d ago", read: true },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Notifications</h1>
          <p className="text-slate-500">Stay updated with your campaign activity and platform alerts.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
          <Button variant="outline" className="text-slate-600">
            <Check className="w-4 h-4 mr-2" /> Mark all read
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white border border-slate-200 p-1 mb-6 w-full sm:w-auto">
              <TabsTrigger value="all" className="flex-1 sm:flex-none px-6">All</TabsTrigger>
              <TabsTrigger value="unread" className="flex-1 sm:flex-none px-6">Unread</TabsTrigger>
              <TabsTrigger value="mentions" className="flex-1 sm:flex-none px-6">Mentions</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notif) => (
                <NotificationItem key={notif.id} notification={notif} />
              ))}
            </TabsContent>
            
            <TabsContent value="unread" className="space-y-4">
              {notifications.filter(n => !n.read).map((notif) => (
                <NotificationItem key={notif.id} notification={notif} />
              ))}
            </TabsContent>

            <TabsContent value="mentions" className="space-y-4">
              <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-lg border border-slate-200 border-dashed">
                <p>No mentions yet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-4 border-slate-200">
            <h3 className="font-bold text-sm text-slate-900 mb-4 uppercase tracking-wider">Filter by Type</h3>
            <div className="space-y-2">
              {['System', 'Funding', 'Comments', 'Mentions', 'Updates'].map((filter) => (
                <div key={filter} className="flex items-center gap-3">
                  <input type="checkbox" id={filter} className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" defaultChecked />
                  <label htmlFor={filter} className="text-sm text-slate-600 cursor-pointer select-none">{filter}</label>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function NotificationItem({ notification }) {
  return (
    <Card className={`p-4 border-slate-200 hover:shadow-md transition-shadow ${notification.read ? 'bg-white' : 'bg-blue-50/30 border-blue-100'}`}>
      <div className="flex gap-4">
        <div className={`mt-1 p-3 rounded-full shrink-0 h-12 w-12 flex items-center justify-center ${
          notification.type === 'funding' ? 'bg-green-100 text-green-600' :
          notification.type === 'message' ? 'bg-blue-100 text-blue-600' :
          notification.type === 'alert' ? 'bg-red-100 text-red-600' :
          'bg-slate-100 text-slate-600'
        }`}>
          {notification.type === 'funding' ? <DollarSign className="w-6 h-6" /> :
           notification.type === 'message' ? <MessageSquare className="w-6 h-6" /> :
           notification.type === 'alert' ? <ShieldAlert className="w-6 h-6" /> :
           <Bell className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h4 className={`text-base ${notification.read ? 'font-medium text-slate-900' : 'font-bold text-slate-900'}`}>{notification.title}</h4>
            <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{notification.time}</span>
          </div>
          <p className="text-sm text-slate-600 mb-3">{notification.message}</p>
          <div className="flex gap-2">
            {!notification.read && (
              <Button variant="ghost" size="sm" className="h-7 text-xs text-blue-600 hover:text-blue-700 px-2">
                Mark as read
              </Button>
            )}
            <Button variant="ghost" size="sm" className="h-7 text-xs text-slate-500 hover:text-red-600 px-2">
              <Trash2 className="w-3 h-3 mr-1" /> Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
