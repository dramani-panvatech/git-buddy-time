import React from 'react';
import { Brain, Database, Cloud, Box, Users, AppWindow, Bug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

        <section className="py-20 bg-gradient-to-br from-white to-secondary-50">
  <div className="container mx-auto px-4 overflow-visible"> {/* ensure no overflow hidden */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      
      {/* Sticky Left Panel */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 h-fit"> {/* KEY FIX */}
          <LeftPanel />
        </div>
      </div>

      {/* Scrollable Right Content */}
      <div className="lg:col-span-2">
        <div className="space-y-6 pb-12">
                            {services.map((s, idx) => {
                                const Icon = s.icon;
                                const inverted = s.inverted ?? false;
                                return (
                                    <article
                                        key={s.title}
                                        className="group transition-transform duration-300 ease-out will-change-transform"
                                    >
                                        <Card className="overflow-hidden border border-border hover-scale shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.25)] animate-enter">
                                            <CardHeader className="bg-card">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 rounded-full p-2 bg-secondary text-secondary-foreground">
                                                        <Icon className="h-5 w-5" aria-hidden />
                                                    </div>
                                                    <div>
                                                        <CardTitle className="text-xl">{s.title}</CardTitle>
                                                        <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardContent
                                                className={
                                                    inverted
                                                        ? "bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))]"
                                                        : "bg-secondary text-secondary-foreground"
                                                }
                                            >
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                    {s.bullets.map((b) => (
                                                        <li key={b} className="flex items-center gap-2">
                                                            <span className={inverted ? "inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-foreground))]" : "inline-block h-1.5 w-1.5 rounded-full bg-ring"} />
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </article>
                                );
                            })}
                        </div>
      </div>
      
    </div>
  </div>
</section>


        
    );
};

export default EngineeringServices;

