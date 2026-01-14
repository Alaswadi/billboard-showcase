
import DashboardLayout from '@/components/Layout/DashboardLayout';
import MapComponent from '@/components/MapComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, FileText, CheckCircle, Clock } from 'lucide-react';

const GovernmentDashboard = () => {
    return (
        <DashboardLayout userRole="government" userName="المكتب الحكومي - صنعاء">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">مرحباً، المكتب الحكومي</h1>
                    <p className="text-gray-500 mt-2">إليك نظرة عامة على جميع اللوحات الإعلانية والطلبات المعلقة في أمانة العاصمة.</p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">إجمالي اللوحات</CardTitle>
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,248</div>
                            <p className="text-xs text-muted-foreground">+12 من الشهر الماضي</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">طلبات معلقة</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-600">14</div>
                            <p className="text-xs text-muted-foreground">تحتاج للمراجعة</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">إعلانات نشطة</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-600">843</div>
                            <p className="text-xs text-muted-foreground">+4% من الشهر الماضي</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">تراخيص منتهية</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">7</div>
                            <p className="text-xs text-muted-foreground">تتطلب إجراءات</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-7">
                    {/* Main Map Area */}
                    <div className="col-span-4 lg:col-span-5">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>خريطة توزع اللوحات - أمانة العاصمة</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <MapComponent
                                    height="400px"
                                    markers={[
                                        { id: 1, position: [15.3694, 44.1910], title: 'شارع الزبيري - تقاطع حدة', description: 'شركة العالمية للدعاية - نشط', color: '#10b981' },
                                        { id: 2, position: [15.3500, 44.2000], title: 'شارع الستين الجنوبي', description: 'شركة النور للدعاية - معلق', color: '#f59e0b' },
                                        { id: 3, position: [15.3800, 44.1800], title: 'ميدان التحرير', description: 'شركة سبأ للإعلان - منتهي', color: '#ef4444' },
                                    ]}
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Pending Reviews List */}
                    <div className="col-span-3 lg:col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>مراجعات عاجلة</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <div key={item} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                            <div className="flex justify-between items-start mb-2">
                                                <Badge variant={item === 1 ? 'destructive' : 'secondary'} className={item === 1 ? 'bg-red-500' : 'bg-orange-500 text-white'}>
                                                    {item === 1 ? 'إعلان مخالف' : 'طلب جديد'}
                                                </Badge>
                                                <span className="text-xs text-gray-500">منذ 2 ساعة</span>
                                            </div>
                                            <h4 className="font-semibold text-sm mb-1">شركة العالمية للدعاية</h4>
                                            <p className="text-xs text-gray-600 mb-3">شارع حدة - أمام الكميم</p>
                                            <div className="flex gap-2">
                                                <Button size="sm" className="w-full text-xs h-8">مراجعة</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default GovernmentDashboard;
