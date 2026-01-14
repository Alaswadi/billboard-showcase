
import DashboardLayout from '@/components/Layout/DashboardLayout';
import MapComponent from '@/components/MapComponent';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, CreditCard, ImageIcon, Layout } from 'lucide-react';

const AdCompanyDashboard = () => {
    return (
        <DashboardLayout userRole="advertising_company" userName="شركة النور ميديا">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">مرحباً، شركة النور</h1>
                        <p className="text-gray-500 mt-2">إليك نظرة عامة على لوحاتك الإعلانية وحملات عملائك.</p>
                    </div>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        إضافة لوحة جديدة
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>لوحاتي</CardDescription>
                            <CardTitle className="text-3xl">24</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">3 قيد المراجعة</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>إعلانات نشطة</CardDescription>
                            <CardTitle className="text-3xl">18</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium">
                                <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                                تعمل جيداً
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>التراخيص</CardDescription>
                            <CardTitle className="text-3xl">2</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-red-500 font-medium">تنتهي قريباً (أقل من 30 يوم)</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <Card className="hover:bg-gray-50 cursor-pointer transition-colors border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-6 text-center space-y-2">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">طلب موقع جديد</h3>
                                <p className="text-xs text-muted-foreground mt-1">تقديم طلب لترخيص موقع لوحة جديد</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover:bg-gray-50 cursor-pointer transition-colors border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-6 text-center space-y-2">
                            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
                                <ImageIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">رفع إعلان جديد</h3>
                                <p className="text-xs text-muted-foreground mt-1">تحديث المحتوى للوحات الحالية</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hover:bg-gray-50 cursor-pointer transition-colors border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-6 text-center space-y-2">
                            <div className="p-3 rounded-full bg-orange-100 text-orange-600">
                                <CreditCard className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">تجديد التراخيص</h3>
                                <p className="text-xs text-muted-foreground mt-1">سداد الرسوم الحكومية</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Map Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>مواقع لوحاتي</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <MapComponent
                            height="350px"
                            markers={[
                                { id: 1, position: [15.3550, 44.1950], title: 'لوحة شارع تعز', description: 'نشطة' },
                                { id: 2, position: [15.3720, 44.2050], title: 'جولة الحصبة', description: 'نشطة' },
                            ]}
                        />
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

// Icon component helper
import { MapPin } from 'lucide-react';

export default AdCompanyDashboard;
