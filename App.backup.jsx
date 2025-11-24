import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  Search, Menu, X, Heart, Share2, TrendingUp, ShieldCheck, Users, 
  ChevronRight, Wallet, CheckCircle2, Lock, Clock, MapPin, AlertCircle,
  LayoutDashboard, LogOut, PlusCircle, FileText, DollarSign, User,
  PlayCircle, ChevronDown, ExternalLink, Calendar, Star, ArrowRight,
  Shield, ArrowUpRight, Eye, EyeOff, ArrowLeft, Bell, Upload
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as SlotPrimitive from '@radix-ui/react-slot';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- UI COMPONENTS ---

const buttonVariants = (variant: string = "default", size: string = "default") => {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 cursor-pointer";
  const variants: Record<string, string> = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    link: "text-slate-900 underline-offset-4 hover:underline",
  };
  const sizes: Record<string, string> = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };
  return cn(base, variants[variant], sizes[size]);
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants(variant, size), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-xl border bg-card text-card-foreground shadow-sm bg-white", className)} {...props} />
));
Card.displayName = "Card";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" }>(({ className, variant = "default", ...props }, ref) => {
  const variants: Record<string, string> = {
    default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80",
    outline: "text-slate-950 border-slate-200 border",
  };
  return (
    <div ref={ref} className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2", variants[variant], className)} {...props} />
  );
});
Badge.displayName = "Badge";

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-slate-100", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-blue-600 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500", className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-950 data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Avatar = React.forwardRef<React.ElementRef<typeof SlotPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SlotPrimitive.Root> & { src?: string; fallback?: string }>(({ className, src, fallback, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-100", className)} {...props}>
      {src ? <img className="aspect-square h-full w-full object-cover" src={src} alt="" /> : <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-500 font-semibold">{fallback}</div>}
    </div>
  )
})
Avatar.displayName = "Avatar"

// --- HELPER COMPONENTS ---

function ImageWithFallback({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [error, setError] = useState(false);
  const fallbackImage = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000";

  return (
    <img 
      src={error ? fallbackImage : src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
      {...props}
    />
  );
}

// Fundora Logo Component (Replaces image imports)
const FundoraLogo = ({ className, invert = false }: { className?: string, invert?: boolean }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <div className={cn("h-8 w-8 rounded-lg transform rotate-3 flex items-center justify-center font-bold text-lg", invert ? "bg-white text-blue-600" : "bg-blue-600 text-white")}>
      F
    </div>
    <span className={cn("font-bold text-xl tracking-tight", invert ? "text-white" : "text-slate-900")}>Fundora</span>
  </div>
);

// --- DOMAIN COMPONENTS ---

// MilestoneTimeline.tsx
interface Milestone {
  id: number;
  title: string;
  description: string;
  status: string;
  fundAmount: number;
  completedDate?: string;
  expectedDate?: string;
  proofUrl?: string;
}

function MilestoneTimeline({ milestones }: { milestones: Milestone[] }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'locked': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-6 h-6 text-white" />;
      case 'in-progress': return <Clock className="w-6 h-6 text-white" />;
      case 'locked': return <Lock className="w-6 h-6 text-white" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed': return <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none">Completed</Badge>;
      case 'in-progress': return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">In Progress</Badge>;
      case 'locked': return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-none">Locked</Badge>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6">
      {milestones.map((milestone, index) => (
        <div key={milestone.id} className="relative">
          {/* Connection Line */}
          {index < milestones.length - 1 && (
            <div 
              className={`absolute left-6 top-12 w-0.5 h-full ${
                milestone.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
          )}

          {/* Milestone Card */}
          <div className="flex gap-4">
            {/* Icon */}
            <div className={`w-12 h-12 rounded-full ${getStatusColor(milestone.status)} flex items-center justify-center flex-shrink-0 relative z-10`}>
              {getStatusIcon(milestone.status)}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="mb-1 font-semibold text-slate-900">{milestone.title}</h3>
                    {getStatusBadge(milestone.status)}
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-medium">
                      Rs. {milestone.fundAmount.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">to be released</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    {milestone.status === 'completed' && milestone.completedDate && (
                      <span className="text-green-700 font-medium">Completed on {new Date(milestone.completedDate).toLocaleDateString()}</span>
                    )}
                    {milestone.status === 'in-progress' && milestone.expectedDate && (
                      <span className="text-blue-700 font-medium">Expected by {new Date(milestone.expectedDate).toLocaleDateString()}</span>
                    )}
                    {milestone.status === 'locked' && milestone.expectedDate && (
                      <span className="text-gray-500">Expected by {new Date(milestone.expectedDate).toLocaleDateString()}</span>
                    )}
                  </div>

                  {milestone.status === 'completed' && milestone.proofUrl && (
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Proof
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-blue-900 mb-2 font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> How Milestone-Based Funding Works</h4>
        <ul className="text-sm text-blue-800 space-y-1 pl-5 list-disc">
          <li>Funds are held securely until milestones are completed</li>
          <li>Creators submit proof for each milestone</li>
          <li>Our team verifies the submission within 48 hours</li>
          <li>Once verified, funds are released to the creator</li>
          <li>You'll receive notifications for each milestone completion</li>
        </ul>
      </div>
    </div>
  );
}

// RewardTier.tsx
interface RewardTierProps {
  reward: {
    id: number;
    title: string;
    amount: number;
    description: string;
    backers: number;
    delivery: string;
    available: boolean;
    popular?: boolean;
    limited?: number;
  };
  selected: boolean;
  onSelect: () => void;
}

function RewardTier({ reward, selected, onSelect }: RewardTierProps) {
  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        selected 
          ? 'border-blue-600 bg-blue-50/50 ring-1 ring-blue-600' 
          : 'border-gray-200 hover:border-blue-400 hover:shadow-sm'
      } ${!reward.available ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={reward.available ? onSelect : undefined}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-xl font-bold text-gray-900 mb-1">
            Rs. {reward.amount.toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <h4 className="font-medium">{reward.title}</h4>
            {reward.popular && (
              <Badge className="bg-orange-100 text-orange-700 border-none flex items-center gap-1 hover:bg-orange-200">
                <Star className="w-3 h-3 fill-orange-700" />
                Popular
              </Badge>
            )}
          </div>
        </div>
        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${selected ? 'border-blue-600' : 'border-gray-300'}`}>
          {selected && <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4">{reward.description}</p>

      {/* Stats */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{reward.backers} backers</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{reward.delivery}</span>
        </div>
      </div>

      {/* Limited availability */}
      {reward.limited && (
        <div className="mb-3 text-sm font-medium text-orange-600">
          Limited: Only {reward.limited} remaining
        </div>
      )}

      {/* Action Button */}
      {reward.available ? (
        <Button 
          variant={selected ? "default" : "outline"}
          className={`w-full ${selected ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          {selected ? 'Selected' : 'Select Reward'}
        </Button>
      ) : (
        <Button variant="outline" className="w-full" disabled>
          No Longer Available
        </Button>
      )}
    </div>
  );
}

// ProjectCard.tsx
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    creator: string;
    image: string;
    goal: number;
    raised: number;
    backers: number;
    daysLeft: number;
    milestoneVerified: boolean;
    category: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const percentageFunded = Math.round((project.raised / project.goal) * 100);
  
  const imageMap: { [key: string]: string } = {
    "agriculture technology": "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTYzNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "traditional nepal art": "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "clean water community": "https://images.unsplash.com/photo-1538300342682-cf57afb97285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "eco friendly packaging": "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "artisan marketplace mobile": "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    "coding bootcamp education": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  };

  return (
    <Link to={`/campaign/${project.id}`} className="group h-full block">
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
          <h3 className="mb-2 font-bold text-lg text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
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

// --- PAGE COMPONENTS ---

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FundoraLogo />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 bg-slate-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Explore
            </Link>
            <Link to="/dashboard" className="hidden md:block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            
            <button className="p-2 text-gray-700 hover:text-blue-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <Link to="/login" className="hidden sm:flex p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate('/dashboard')}>
              Start a Campaign
            </Button>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4 bg-white space-y-4 shadow-lg">
          <Link to="/" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Explore</Link>
          <Link to="/dashboard" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Dashboard</Link>
          <Link to="/login" className="block text-sm font-medium hover:text-blue-600 p-2 rounded hover:bg-gray-50">Login</Link>
          <Input type="search" placeholder="Search..." className="w-full" />
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <FundoraLogo invert className="mb-4" />
            <p className="text-slate-400 text-sm">Empowering the next generation of Nepali creators and innovators.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Discover</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Tech & Innovation</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Creative Works</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Community Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">For Creators</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Start a Campaign</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Creator Handbook</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2025 Fundora Nepal. All rights reserved.</p>
          <div className="flex gap-4">
             <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded">Secured by eSewa</div>
             <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded">Secured by Khalti</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const trendingProjects = [
    {
      id: 1,
      title: "Smart Agriculture IoT System for Nepali Farmers",
      creator: "TechFarm Nepal",
      image: "agriculture technology",
      goal: 500000,
      raised: 387500,
      backers: 156,
      daysLeft: 12,
      milestoneVerified: true,
      category: "Technology"
    },
    {
      id: 2,
      title: "Documentary: Preserving Traditional Nepali Art Forms",
      creator: "Heritage Filmmakers",
      image: "traditional nepal art",
      goal: 300000,
      raised: 245000,
      backers: 89,
      daysLeft: 8,
      milestoneVerified: true,
      category: "Film & Video"
    },
    {
      id: 3,
      title: "Clean Water Initiative for Rural Communities",
      creator: "WaterAid Nepal",
      image: "clean water community",
      goal: 750000,
      raised: 520000,
      backers: 234,
      daysLeft: 20,
      milestoneVerified: false,
      category: "Social Cause"
    },
    {
      id: 4,
      title: "Eco-Friendly Packaging Startup",
      creator: "GreenPack Nepal",
      image: "eco friendly packaging",
      goal: 400000,
      raised: 158000,
      backers: 67,
      daysLeft: 25,
      milestoneVerified: false,
      category: "Business"
    },
    {
      id: 5,
      title: "Mobile App for Local Artisan Marketplace",
      creator: "Kala Bazaar",
      image: "artisan marketplace mobile",
      goal: 600000,
      raised: 480000,
      backers: 145,
      daysLeft: 15,
      milestoneVerified: true,
      category: "Technology"
    },
    {
      id: 6,
      title: "Youth Coding Bootcamp in Kathmandu",
      creator: "Code Nepal",
      image: "coding bootcamp education",
      goal: 350000,
      raised: 295000,
      backers: 112,
      daysLeft: 10,
      milestoneVerified: false,
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="bg-gradient-to-r from-slate-900 via-blue-900/90 to-slate-900/80 absolute inset-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>#1 Trusted Crowdfunding Platform in Nepal</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Empowering Nepali <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Dreams & Innovations</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                  Fund innovative projects with confidence through milestone-based releases. 
                  Your support, their success, guaranteed transparency.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-base px-8 h-12 font-bold shadow-xl">
                  Start a Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 h-12 backdrop-blur-sm">
                  Explore Projects
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold">Rs. 24M+</div>
                  <div className="text-sm text-slate-400">Total Funded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12K+</div>
                  <div className="text-sm text-slate-400">Backers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-slate-400">Verified</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl relative transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Platform Activity</div>
                      <div className="text-2xl font-bold">Real-time Growth</div>
                    </div>
                    <TrendingUp className="w-10 h-10 text-green-400" />
                  </div>
                  <div className="space-y-6">
                    {[1,2,3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 font-bold">
                          {String.fromCharCode(64+i)}
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-white/20 rounded w-2/3 mb-2"></div>
                          <div className="h-2 bg-white/10 rounded w-1/2"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-blue-50/50 transition-colors group">
              <div className="bg-blue-100 p-4 rounded-2xl mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Milestone Verification</h3>
              <p className="text-slate-600 leading-relaxed">Funds released only after verified project progress. We ensure creators deliver on their promises step-by-step.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-blue-50/50 transition-colors group">
              <div className="bg-purple-100 p-4 rounded-2xl mb-6 text-purple-600 group-hover:scale-110 transition-transform">
                <Wallet className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Local Payment Support</h3>
              <p className="text-slate-600 leading-relaxed">Seamlessly support projects using your favorite local payment methods including eSewa, Khalti, and bank transfers.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-blue-50/50 transition-colors group">
              <div className="bg-green-100 p-4 rounded-2xl mb-6 text-green-600 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Tracking</h3>
              <p className="text-slate-600 leading-relaxed">Get real-time updates on project milestones, fund usage, and impact. Know exactly where your money goes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Trending Campaigns</h2>
              <p className="text-slate-600 text-lg">Support the most exciting projects in Nepal</p>
            </div>
            <Button variant="outline" className="hidden sm:flex gap-2">
              View All Projects <ArrowRight className="w-4 h-4"/>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Button variant="outline" className="w-full">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Bring Your Idea to Life?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of successful Nepali creators who have raised funds and built communities on Fundora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg h-auto shadow-xl">
              Start Your Campaign
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-slate-600 text-white hover:bg-slate-800 px-10 py-6 text-lg h-auto">
              Learn How it Works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CampaignDetail() {
  const { id } = useParams();
  const [selectedReward, setSelectedReward] = useState<number | null>(null);
  
  // Mock data based on upload
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
                    <MapPin className="w-4 h-4" />
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
                  {campaignData.story.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-lg">
                      {paragraph}
                    </p>
                  ))}
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
                    We're excited to announce that our field testing phase has been completed with outstanding results. All 20 participating farmers have reported positive experiences with the sensors...
                  </p>
                  <div className="flex gap-4 text-sm text-blue-600 font-medium cursor-pointer hover:underline">
                    Read full update <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-gray-300 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">Update #2</Badge>
                    <span className="text-sm text-gray-500">15 days ago</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Testing Progress: Week 4</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Week 4 of testing shows consistent sensor accuracy and positive farmer feedback on the UI...
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

function CreatorDashboard() {
  const percentageFunded = Math.round((dashboardData.totalRaised / dashboardData.goal) * 100);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:block fixed h-full z-10">
        <div className="p-6 border-b border-slate-100">
          <Link to="/" className="flex items-center">
            <FundoraLogo />
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          <Button variant="secondary" className="w-full justify-start font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100">
            <LayoutDashboard className="mr-3 h-5 w-5" /> Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900">
            <FileText className="mr-3 h-5 w-5" /> My Campaigns
          </Button>
          <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900">
            <DollarSign className="mr-3 h-5 w-5" /> Finances
          </Button>
          <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-slate-900">
            <User className="mr-3 h-5 w-5" /> Profile
          </Button>
        </nav>
        <div className="absolute bottom-0 p-4 w-full border-t border-slate-100">
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="mr-3 h-5 w-5" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Creator Dashboard</h1>
            <p className="text-slate-500">Welcome back, TechFarm Nepal</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 gap-2 h-11 px-6 shadow-lg shadow-blue-200">
            <PlusCircle className="h-5 w-5" /> Start New Campaign
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <Badge className="bg-green-100 text-green-700 border-none">+12%</Badge>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">Rs. {dashboardData.totalRaised.toLocaleString()}</div>
            <div className="text-sm text-slate-500 font-medium">Total Raised</div>
            <Progress value={percentageFunded} className="mt-4 h-1.5" />
          </Card>

          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <Badge className="bg-green-100 text-green-700 border-none">+8%</Badge>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{dashboardData.backers}</div>
            <div className="text-sm text-slate-500 font-medium">Total Backers</div>
          </Card>

          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Eye className="w-6 h-6 text-orange-600" />
              </div>
              <Badge className="bg-green-100 text-green-700 border-none">+24%</Badge>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{dashboardData.views.toLocaleString()}</div>
            <div className="text-sm text-slate-500 font-medium">Campaign Views</div>
          </Card>

          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow bg-slate-900 text-white">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-white/10 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-blue-500 text-white border-none">Active</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-sm text-slate-400 font-medium">Days Remaining</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Milestones & Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Campaign Banner */}
            <Card className="p-6 border-l-4 border-l-blue-600 bg-white shadow-md">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{dashboardData.campaignTitle}</h3>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">Live</Badge>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><DollarSign className="w-4 h-4"/> Goal: Rs. {dashboardData.goal.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> 12 Days Left</span>
                  </div>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-200 rounded-lg text-blue-700">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-slate-900">Action Required: Milestone Proof</h4>
                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">Due in 3 days</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      You have completed the "Field Testing" phase. Please submit verification documents to unlock the next fund release of <strong>Rs. 200,000</strong>.
                    </p>
                    <Button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800">
                      <Upload className="w-4 h-4 mr-2" /> Upload Proof
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Milestones Tabs */}
            <Card className="p-6 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Milestone Tracker</h2>
              </div>
              
              <Tabs defaultValue="pending">
                <TabsList className="mb-6 bg-slate-100 p-1 rounded-lg w-full sm:w-auto">
                  <TabsTrigger value="pending" className="flex-1 sm:flex-none px-6">Pending ({dashboardData.pendingMilestones.length})</TabsTrigger>
                  <TabsTrigger value="completed" className="flex-1 sm:flex-none px-6">Completed ({dashboardData.completedMilestones.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4 animate-in fade-in-50">
                  {dashboardData.pendingMilestones.map((milestone) => (
                    <div key={milestone.id} className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{milestone.title}</h3>
                            <p className="text-sm text-slate-500">{milestone.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-100">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="text-sm font-medium text-slate-600">
                          Unlocks: <span className="text-slate-900">Rs. {milestone.fundAmount.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-slate-500">
                          Deadline: {new Date(milestone.deadline).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4 animate-in fade-in-50">
                  {dashboardData.completedMilestones.map((milestone) => (
                    <div key={milestone.id} className="border border-green-200 bg-green-50/30 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900">{milestone.title}</h3>
                            <p className="text-sm text-green-700 font-medium flex items-center gap-1">
                              Funds Released <CheckCircle2 className="w-3 h-3"/>
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-500">View Proof</Button>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-green-100">
                        <div className="text-sm font-medium text-slate-600">
                          Amount: <span className="text-slate-900">Rs. {milestone.fundAmount.toLocaleString()}</span>
                        </div>
                        <div className="text-sm text-slate-500">
                          Completed: {new Date(milestone.completedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column: Activity & Funds */}
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-4">Recent Activity</h3>
              <div className="space-y-6">
                {dashboardData.recentBackers.map((backer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                      {backer.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-900">{backer.name}</div>
                      <div className="text-xs text-slate-500">backed your campaign</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">+ Rs. {backer.amount.toLocaleString()}</div>
                      <div className="text-xs text-slate-400">{backer.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-6 text-sm">View All Transactions</Button>
            </Card>

            <Card className="p-6 bg-slate-900 text-white">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Wallet className="w-5 h-5" /> Funds Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-400 text-sm">Total Raised</span>
                  <span className="font-bold text-lg">Rs. 387,500</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-slate-400 text-sm">Available for Release</span>
                  <span className="font-bold text-lg text-green-400">Rs. 250,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Pending Milestones</span>
                  <span className="font-bold text-lg text-orange-400">Rs. 137,500</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-white text-slate-900 hover:bg-slate-100 font-bold">
                Payout Settings
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <Card className="p-8 shadow-xl border-slate-200 bg-white">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-4">
              <FundoraLogo />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-500 mt-2">Sign in to continue to your dashboard</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <Input type="email" placeholder="name@company.com" className="h-11" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <Input type="password" placeholder="Enter your password" className="h-11 pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <Button className="w-full h-11 text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
              Sign In
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-bold hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function SignupPage() {
  const [userType, setUserType] = useState<'backer' | 'creator'>('backer');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <Card className="p-8 shadow-xl border-slate-200 bg-white">
          <div className="text-center mb-8">
            <div className="inline-flex justify-center mb-4">
              <FundoraLogo />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
            <p className="text-slate-500 mt-2">Join the community of changemakers</p>
          </div>

          <form className="space-y-5">
            {/* User Type Selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div 
                className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${userType === 'backer' ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' : 'border-slate-200 hover:border-slate-300'}`}
                onClick={() => setUserType('backer')}
              >
                <div className="font-bold text-sm">Backer</div>
                <div className="text-xs opacity-80">I want to support</div>
              </div>
              <div 
                className={`cursor-pointer border rounded-lg p-3 text-center transition-all ${userType === 'creator' ? 'border-blue-600 bg-blue-50 text-blue-700 ring-1 ring-blue-600' : 'border-slate-200 hover:border-slate-300'}`}
                onClick={() => setUserType('creator')}
              >
                <div className="font-bold text-sm">Creator</div>
                <div className="text-xs opacity-80">I want to build</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">First Name</label>
                <Input placeholder="John" className="h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Last Name</label>
                <Input placeholder="Doe" className="h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <Input type="email" placeholder="name@company.com" className="h-11" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <Input type="password" placeholder="Create a password" className="h-11 pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="terms" className="text-sm text-slate-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Button className="w-full h-11 text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200">
              Create Account
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

// --- MAIN APP ROOT ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<CreatorDashboard />} />
          <Route path="/*" element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <HomePage />
                    <Footer />
                  </>
                } />
                <Route path="/campaign/:id" element={
                  <>
                    <CampaignDetail />
                    <Footer />
                  </>
                } />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}