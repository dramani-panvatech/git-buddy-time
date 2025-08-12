import React from 'react';
import { Brain, Database, Cloud, Box, Users, AppWindow, Bug, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LeftPanel from "../components/LeftPanel";

type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    bullets: string[];
    inverted?: boolean;
};

const services: Service[] = [
    {
        icon: Brain,
        title: "AI & ML",
        description:
            "Applied AI/ML to deliver automation and insights across your business.",
        bullets: [
            "Model development",
            "MLOps & monitoring",
            "LLM integration",
            "Chatbot solutions",
        ],
    },
    {
        icon: Database,
        title: "Data Engineering",
        description:
            "Modern data platforms, pipelines, and analytics for decision-making.",
        bullets: [
            "Data warehousing",
            "ETL/ELT pipelines",
            "BI & dashboards",
            "Real-time streaming",
        ],
        inverted: true,
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description:
            "Cloud-native architectures, DevOps, and cost-efficient operations.",
        bullets: [
            "Cloud migration",
            "Kubernetes & IaC",
            "Observability",
            "FinOps guidance",
        ],
    },
    {
        icon: Box,
        title: "Software Development",
        description:
            "Full-cycle product development from idea to secure, scalable delivery.",
        bullets: [
            "Web apps",
            "APIs & integrations",
            "Microservices",
            "Performance tuning",
        ],
        inverted: true,
    },
    {
        icon: Box,
        title: "Product Engineering",
        description:
            "Design, build, and evolve products with modern tech and best practices.",
        bullets: [
            "MVP to scale",
            "Design systems",
            "Accessibility",
            "Security hardening",
        ],
    },
    {
        icon: Users,
        title: "Dedicated Teams",
        description:
            "Augment your capabilities with cross-functional, senior engineering teams.",
        bullets: [
            "Team extensions",
            "Delivery leadership",
            "QA & DevOps",
            "Agile collaboration",
        ],
        inverted: true,
    },
    {
        icon: AppWindow,
        title: "Application Development",
        description:
            "Crafting responsive, high-performing applications for web and mobile.",
        bullets: [
            "Frontend & UX",
            "Mobile & PWA",
            "Performance optimization",
            "Internationalization",
        ],
    },
    {
        icon: Bug,
        title: "QA & Testing",
        description:
            "Automated and manual testing to ensure reliability and confidence.",
        bullets: [
            "Automation",
            "Performance testing",
            "Security testing",
            "CI/CD quality gates",
        ],
        inverted: true,
    },
];




const EngineeringServices = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-background via-background to-secondary/10">
            
            {/* Sticky Left Sidebar */}
            <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
                <div className="h-full flex flex-col">
                    <div className="flex-1 px-4 lg:px-6 py-6 lg:py-8">
                        <LeftPanel />
                    </div>
                    
                    {/* Optional sidebar footer for desktop */}
                    <div className="hidden lg:block px-6 py-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                            Trusted by 200+ companies worldwide
                        </p>
                    </div>
                </div>
            </aside>

            {/* Scrollable Main Content */}
            <main className="flex-1 lg:overflow-y-auto">
                <div className="container mx-auto px-4 py-8 lg:py-12">
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            const isHighlighted = service.inverted;
                            
                            return (
                                <article
                                    key={service.title}
                                    className="group cursor-pointer"
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                    }}
                                >
                                    <Card className={`
                                        relative overflow-hidden h-full transition-all duration-500 ease-out
                                        ${isHighlighted 
                                            ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40' 
                                            : 'bg-card hover:bg-accent/5 border-border hover:border-border/60'
                                        }
                                        hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]
                                        shadow-lg
                                    `}>
                                        
                                        {/* Gradient Overlay for Highlighted Cards */}
                                        {isHighlighted && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
                                        )}
                                        
                                        <CardHeader className="relative pb-4">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className={`
                                                    p-3 rounded-2xl transition-all duration-300 group-hover:scale-110
                                                    ${isHighlighted 
                                                        ? 'bg-primary/10 text-primary border border-primary/20' 
                                                        : 'bg-secondary/80 text-secondary-foreground border border-secondary/40'
                                                    }
                                                `}>
                                                    <Icon className="h-6 w-6" />
                                                </div>
                                                
                                                {isHighlighted && (
                                                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 font-medium">
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <CardTitle className={`
                                                    text-xl font-bold transition-colors duration-300
                                                    ${isHighlighted ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                                                `}>
                                                    {service.title}
                                                </CardTitle>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardHeader>
                                        
                                        <CardContent className="relative pt-0">
                                            <div className="space-y-3">
                                                {service.bullets.map((bullet, bulletIdx) => (
                                                    <div 
                                                        key={bullet}
                                                        className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1"
                                                        style={{
                                                            animationDelay: `${(idx * 100) + (bulletIdx * 50)}ms`,
                                                        }}
                                                    >
                                                        <div className={`
                                                            w-2 h-2 rounded-full transition-all duration-300 group-hover/item:scale-125
                                                            ${isHighlighted 
                                                                ? 'bg-primary/60 group-hover/item:bg-primary' 
                                                                : 'bg-muted-foreground/40 group-hover/item:bg-primary'
                                                            }
                                                        `} />
                                                        <span className="text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                                            {bullet}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Subtle CTA */}
                                            <div className="mt-6 pt-4 border-t border-border/50">
                                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                                    <span>Learn more</span>
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </article>
                            );
                        })}
                    </div>
                    
                    {/* Bottom spacing for scroll comfort */}
                    <div className="h-16" />
                </div>
            </main>
        </div>
    );
};

export default EngineeringServices;

