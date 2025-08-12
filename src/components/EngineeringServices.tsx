import React from 'react';
import { Brain, Database, Cloud, Box, Users, AppWindow, Bug, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
        <div className="min-h-screen flex flex-col lg:flex-row">
            
            {/* Sticky Left Sidebar */}
            <aside className="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-r border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="h-full flex flex-col">
                    <div className="flex-1 px-4 lg:px-6 py-6 lg:py-8">
                        <LeftPanel />
                    </div>
                    
                    {/* Stats section */}
                    <div className="px-6 py-6 border-t border-border/50">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">200+</div>
                                <div className="text-xs text-muted-foreground">Companies</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">98%</div>
                                <div className="text-xs text-muted-foreground">Success Rate</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span>Trusted by industry leaders</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Scrollable Main Content */}
            <main className="flex-1 lg:overflow-y-auto bg-gradient-to-br from-background via-background/50 to-secondary/5">
                <div className="container mx-auto px-4 py-8 lg:py-12">
                    
                    {/* Header */}
                    <div className="mb-12 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            <Sparkles className="h-4 w-4" />
                            <span>Premium Services</span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Our Service Portfolio
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl lg:max-w-none">
                            Comprehensive engineering solutions designed to accelerate your digital transformation
                        </p>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            const isHighlighted = service.inverted;
                            
                            return (
                                <article
                                    key={service.title}
                                    className="group"
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                    }}
                                >
                                    <Card className={`
                                        relative overflow-hidden h-full transition-all duration-500 ease-out
                                        ${isHighlighted 
                                            ? 'bg-gradient-to-br from-primary/5 via-primary/3 to-accent/5 border-primary/20 hover:border-primary/40 shadow-lg shadow-primary/10' 
                                            : 'bg-card hover:bg-accent/5 border-border hover:border-border/60 shadow-md'
                                        }
                                        hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer
                                    `}>
                                        
                                        {/* Premium glow effect for highlighted cards */}
                                        {isHighlighted && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                        )}
                                        
                                        <CardHeader className="relative pb-4">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className={`
                                                    p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                                                    ${isHighlighted 
                                                        ? 'bg-primary/10 text-primary border border-primary/30 shadow-lg shadow-primary/20' 
                                                        : 'bg-secondary text-secondary-foreground border border-secondary/40'
                                                    }
                                                `}>
                                                    <Icon className="h-7 w-7" />
                                                </div>
                                                
                                                {isHighlighted && (
                                                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-md">
                                                        <Sparkles className="h-3 w-3 mr-1" />
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>
                                            
                                            <div className="space-y-3">
                                                <CardTitle className={`
                                                    text-xl font-bold transition-colors duration-300
                                                    ${isHighlighted ? 'text-primary' : 'text-foreground group-hover:text-primary'}
                                                `}>
                                                    {service.title}
                                                </CardTitle>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardHeader>
                                        
                                        <CardContent className="relative pt-0 space-y-6">
                                            <div className="space-y-3">
                                                {service.bullets.map((bullet, bulletIdx) => (
                                                    <div 
                                                        key={bullet}
                                                        className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-1"
                                                        style={{
                                                            animationDelay: `${(idx * 100) + (bulletIdx * 50)}ms`,
                                                        }}
                                                    >
                                                        <CheckCircle2 className={`
                                                            h-4 w-4 transition-all duration-300 group-hover/item:scale-110
                                                            ${isHighlighted 
                                                                ? 'text-primary/70 group-hover/item:text-primary' 
                                                                : 'text-muted-foreground/60 group-hover/item:text-primary'
                                                            }
                                                        `} />
                                                        <span className="text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                                            {bullet}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            {/* Enhanced CTA */}
                                            <div className="pt-4 border-t border-border/50">
                                                <Button 
                                                    variant={isHighlighted ? "default" : "ghost"} 
                                                    className={`
                                                        w-full transition-all duration-300 group-hover:scale-105
                                                        ${isHighlighted 
                                                            ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25' 
                                                            : 'hover:bg-primary hover:text-primary-foreground'
                                                        }
                                                    `}
                                                >
                                                    <span>Explore Service</span>
                                                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </article>
                            );
                        })}
                    </div>
                    
                    {/* Bottom CTA section */}
                    <div className="mt-16 text-center">
                        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                            <CardContent className="py-12">
                                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                    Let's discuss how our engineering expertise can accelerate your digital transformation journey.
                                </p>
                                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
                                    Start Your Project
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    
                    {/* Bottom spacing for scroll comfort */}
                    <div className="h-16" />
                </div>
            </main>
        </div>
    );
};

export default EngineeringServices;

