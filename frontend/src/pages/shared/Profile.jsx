import React from 'react';
import { Save, Shield, Bell, User } from 'lucide-react';
import { Button, Card, Input, Avatar, Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui';        

export function Profile() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-500">Manage your account information and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="w-full sm:w-auto justify-start">
          <TabsTrigger value="general" className="px-6"><User className="w-4 h-4 mr-2"/> General</TabsTrigger>      
          <TabsTrigger value="security" className="px-6"><Shield className="w-4 h-4 mr-2"/> Security</TabsTrigger>  
          <TabsTrigger value="notifications" className="px-6"><Bell className="w-4 h-4 mr-2"/> Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="p-6 border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Personal Information</h3>

            <div className="flex items-center gap-6 mb-8">
              <Avatar className="h-24 w-24 text-2xl" fallback="TF" />
              <div>
                <Button variant="outline" size="sm" className="mb-2">Change Avatar</Button>
                <p className="text-xs text-slate-500">JPG, GIF or PNG. Max size of 800K</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name / Organization</label>
                <Input defaultValue="TechFarm Nepal" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email Address</label>
                <Input defaultValue="contact@techfarm.np" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                <Input defaultValue="+977 9841XXXXXX" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Location</label>
                <Input defaultValue="Chitwan, Nepal" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-sm font-medium text-slate-700">Bio</label>
              <textarea
                className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                defaultValue="We are a team of agricultural engineers and software developers passionate about modernizing farming in Nepal."
              />
            </div>

            <div className="flex justify-end">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" /> Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6 border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-6">Security Settings</h3>
            <div className="space-y-4 max-w-md">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Current Password</label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">New Password</label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
                <Input type="password" />
              </div>
              <Button className="mt-4">Update Password</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="p-6">
             <div className="space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-slate-500" /> Email Preferences
              </h3>
              <div className="space-y-3">
                {['Campaign Updates', 'New Messages', 'Marketing Emails', 'Security Alerts'].map((item) => (
                  <div key={item} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                    <span className="text-slate-700">{item}</span>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
