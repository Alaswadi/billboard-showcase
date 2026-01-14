
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { billboards } from '@/data/billboards';

const AdCompanyBillboards = () => {
    return (
        <DashboardLayout userRole="advertising_company" userName="شركة النور للدعاية">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">لوحاتي</h1>
                        <p className="text-gray-500 mt-2">إدارة مخزون اللوحات الإعلانية الخاصة بك.</p>
                    </div>
                    <Button>
                        إضافة لوحة جديدة
                    </Button>
                </div>

                <div className="relative">
                    <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="بحث..." className="pr-10" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {billboards.filter(bb => bb.company === 'مؤسسة النور').map((bb, i) => (
                        <Card key={bb.id} className="overflow-hidden">
                            <div className="h-48 bg-gray-200 relative group">
                                <img
                                    src={bb.images[0]}
                                    alt={bb.location}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-bold text-lg">{bb.id}</h3>
                                    <Badge variant={bb.status === 'maintenance' ? 'destructive' : 'default'} className={bb.status === 'maintenance' ? 'bg-orange-500' : 'bg-emerald-500'}>
                                        {bb.status === 'maintenance' ? 'محجوز' : 'متاح'}
                                    </Badge>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">{bb.location}</p>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">الحجم:</span>
                                    <span className="font-medium">{bb.size}</span>
                                </div>
                                <div className="flex justify-between text-sm mt-1">
                                    <span className="text-muted-foreground">السعر:</span>
                                    <span className="font-medium">{bb.dailyRate} / يوم</span>
                                </div>
                                <Button variant="outline" className="w-full mt-4">إدارة</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AdCompanyBillboards;
