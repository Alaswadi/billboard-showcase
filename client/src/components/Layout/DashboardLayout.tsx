
import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';
import {
    Users,
    LayoutDashboard,
    MapPin,
    FileText,
    CreditCard,
    Settings,
    Bell,
    LogOut,
    Menu,
    X,
    Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

interface SidebarItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

interface DashboardLayoutProps {
    children: React.ReactNode;
    userRole: 'government' | 'advertising_company' | 'end_user';
    userName?: string;
}

const DashboardLayout = ({ children, userRole, userName = "المستخدم" }: DashboardLayoutProps) => {
    const [location] = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const roleConfigs = {
        government: {
            color: 'bg-emerald-600',
            label: 'المكتب الحكومي',
            menu: [
                { icon: LayoutDashboard, label: 'لوحة التحكم', href: '/dashboard/government' },
                { icon: MapPin, label: 'اللوحات الإعلانية', href: '/dashboard/government/billboards' },
                { icon: FileText, label: 'طلبات الإعلانات', href: '/dashboard/government/requests' },
                { icon: CreditCard, label: 'التراخيص والمدفوعات', href: '/dashboard/government/licenses' },
                { icon: Users, label: 'الشركات', href: '/dashboard/government/companies' },
                { icon: Settings, label: 'الإعدادات', href: '/dashboard/government/settings' },
            ]
        },
        advertising_company: {
            color: 'bg-blue-600',
            label: 'شركة إعلانات',
            menu: [
                { icon: LayoutDashboard, label: 'لوحة التحكم', href: '/dashboard/ad-company' },
                { icon: MapPin, label: 'لوحاتي', href: '/dashboard/ad-company/my-billboards' },
                { icon: FileText, label: 'حملاتي', href: '/dashboard/ad-company/campaigns' },
                { icon: CreditCard, label: 'الفواتير', href: '/dashboard/ad-company/billing' },
                { icon: Settings, label: 'الإعدادات', href: '/dashboard/ad-company/settings' },
            ]
        },
        end_user: {
            color: 'bg-indigo-600',
            label: 'مستخدم نهائي',
            menu: [
                { icon: LayoutDashboard, label: 'لوحة التحكم', href: '/dashboard/end-user' },
                { icon: MapPin, label: 'لوحاتي', href: '/dashboard/end-user/locations' },
                { icon: FileText, label: 'إعلاناتي', href: '/dashboard/end-user/ads' },
                { icon: CreditCard, label: 'المدفوعات', href: '/dashboard/end-user/payments' },
                { icon: Settings, label: 'الإعدادات', href: '/dashboard/end-user/settings' },
            ]
        }
    };

    const config = roleConfigs[userRole];

    return (
        <div className="min-h-screen bg-gray-50 font-cairo flex" dir="rtl">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    } lg:relative lg:translate-x-0`}
            >
                <div className="h-full flex flex-col">
                    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-xl text-primary">
                            <MapPin className="h-6 w-6" />
                            <span>إعلانات اليمن</span>
                        </div>
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="p-4">
                        <div className={`rounded-lg p-3 text-white shadow-md ${config.color} mb-6`}>
                            <p className="text-xs opacity-80 mb-1">حساب</p>
                            <p className="font-bold text-sm tracking-wide">{config.label}</p>
                        </div>

                        <nav className="space-y-1">
                            {config.menu.map((item) => {
                                const isActive = location === item.href;
                                return (
                                    <Link href={item.href} key={item.href}>
                                        <div className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer
                      ${isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
                    `}>
                                            <item.icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-gray-500'}`} />
                                            {item.label}
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="mt-auto p-4 border-t border-gray-100">
                        <Link href="/login">
                            <div className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 cursor-pointer transition-colors">
                                <LogOut className="h-5 w-5" />
                                تسجيل الخروج
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="h-5 w-5" />
                        </Button>
                        <div className="relative hidden md:block w-96">
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="بحث في النظام..."
                                className="pr-10 bg-gray-50 border-gray-200 focus-visible:ring-primary/20"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        <Link href="/login">
                            <Button variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
                                <LogOut className="h-4 w-4" />
                                <span>خروج</span>
                            </Button>
                        </Link>

                        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:text-primary">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2 pl-0 hover:bg-transparent">
                                    <Avatar className="h-8 w-8 border border-gray-200">
                                        <AvatarImage src="" />
                                        <AvatarFallback>{userName.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-medium leading-none">{userName}</p>
                                        <p className="text-xs text-gray-500 mt-1">{config.label}</p>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56" dir="rtl">
                                <DropdownMenuLabel>حسابي</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>العييد الإعدادات</DropdownMenuItem>
                                <DropdownMenuItem>الدعم الفني</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <Link href="/login">
                                    <DropdownMenuItem className="text-red-600 focus:text-red-700 focus:bg-red-50 cursor-pointer">
                                        تسجيل الخروج
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
