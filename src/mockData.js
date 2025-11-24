export const campaignData = {
  id: 1,
  title: "Smart Agriculture IoT System for Nepali Farmers",
  creator: "TechFarm Nepal",
  image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTYzNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  category: "Technology",
  location: "Chitwan, Nepal",
  raised: 387500,
  goal: 500000,
  backers: 156,
  daysLeft: 12,
  story: "Our project aims to revolutionize farming in Nepal by introducing affordable IoT sensors...",
  milestones: [
    { id: 1, title: "Prototype Development", description: "Building the initial sensor prototype", status: "completed", fundAmount: 100000, completedDate: "2024-01-15", proofUrl: "#" },
    { id: 2, title: "Field Testing", description: "Testing sensors in real farms", status: "completed", fundAmount: 150000, completedDate: "2024-03-10", proofUrl: "#" },
    { id: 3, title: "Mass Production", description: "Manufacturing 500 units", status: "in-progress", fundAmount: 200000, expectedDate: "2024-06-01" },
    { id: 4, title: "Distribution", description: "Distributing to farmers", status: "locked", fundAmount: 50000, expectedDate: "2024-08-01" }
  ],
  rewards: [
    { id: 1, title: "Early Bird", amount: 1000, description: "Get one sensor at 50% off", backers: 50, delivery: "Aug 2024", available: true, popular: true },
    { id: 2, title: "Farmer Kit", amount: 5000, description: "Full kit with 5 sensors and hub", backers: 20, delivery: "Sep 2024", available: true }
  ]
};


export const dashboardData = {
  totalRaised: 387500,
  goal: 500000,
  backers: 156,
  views: 12500,
  campaignTitle: "Smart Agriculture IoT System",
  pendingMilestones: [
    { id: 3, title: "Mass Production", description: "Manufacturing 500 units", fundAmount: 200000, deadline: "2024-06-01" }
  ],
  completedMilestones: [
    { id: 1, title: "Prototype Development", fundAmount: 100000, completedDate: "2024-01-15" },
    { id: 2, title: "Field Testing", fundAmount: 150000, completedDate: "2024-03-10" }
  ],
  recentBackers: [
    { name: "Ram Sharma", amount: 5000, date: "2 hours ago" },
    { name: "Sita Nepali", amount: 1000, date: "5 hours ago" }
  ]
};

export const creatorCampaigns = [
  {
    id: 1,
    title: "Smart Agriculture IoT System",
    status: "active",
    raised: 387500,
    goal: 500000,
    backers: 156,
    daysLeft: 12,
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    title: "Remote Learning Tablets for Rural Schools",
    status: "draft",
    raised: 0,
    goal: 1000000,
    backers: 0,
    daysLeft: 0,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    title: "Community Clean Water Initiative",
    status: "completed",
    raised: 750000,
    goal: 700000,
    backers: 234,
    daysLeft: 0,
    image: "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=300"
  }
];

export const financeData = {
  availableBalance: 250000,
  pendingBalance: 137500,
  totalWithdrawn: 150000,
  transactions: [
    { id: "TXN-1234", date: "2024-03-15", description: "Milestone 1 Release", amount: 100000, status: "completed" },
    { id: "TXN-1235", date: "2024-03-10", description: "Milestone 2 Release", amount: 50000, status: "completed" },
    { id: "TXN-1236", date: "2024-02-28", description: "Platform Fee (5%)", amount: -5000, status: "completed" },
  ]
};

export const backerData = {
  totalBacked: 15000,
  campaignsBacked: 5,
  activeCampaigns: [
    {
      id: 1,
      title: "Smart Agriculture IoT System",
      creator: "TechFarm Nepal",
      amountBacked: 5000,
      progress: 75,
      daysLeft: 12,
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&q=80&w=300"
    },
    {
      id: 4,
      title: "Eco-Friendly Bamboo Housing",
      creator: "Green Homes",
      amountBacked: 2000,
      progress: 45,
      daysLeft: 25,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=300"
    }
  ],
  recentTransactions: [
    { id: "TXN-9988", date: "2024-03-20", description: "Backed Smart Agriculture", amount: 5000 },
    { id: "TXN-9989", date: "2024-03-18", description: "Backed Bamboo Housing", amount: 2000 }
  ],
  recommended: [
    {
      id: 5,
      title: "Digital Literacy for Seniors",
      category: "Education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=300"
    }
  ]
};

export const adminData = {
  totalCampaigns: 156,
  totalUsers: 1250,
  totalFunding: 4500000,
  activeCampaigns: 42,
  pendingApprovals: 8,
  pendingReviews: 12,
  flaggedCampaigns: 3,
  platformSuccessRate: 85,
  monthlyRevenue: 225000,
  recentActivity: [
    { id: 1, type: "new_campaign", message: "New campaign 'Solar Irrigation' submitted", time: "10 mins ago" },
    { id: 2, type: "flag", message: "Campaign #45 flagged for copyright", time: "1 hour ago" },
    { id: 3, type: "large_backing", message: "Large backing of Rs. 50,000 on Campaign #12", time: "2 hours ago" }
  ]
};
