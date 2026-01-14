
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { billboards } from '@/data/billboards';

const EndUserLocations = () => {
    return (
        <DashboardLayout userRole="end_user" userName="شركة مجموعة هائل">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">لوحاتي</h1>
                    <p className="text-gray-500 mt-2">مواقع اللوحات الإعلانية التي تمتلكها.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {billboards.filter(bb => bb.company === 'شركة مجموعة هائل').map((bb) => (
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
                                <h3 className="font-bold text-lg mb-1">{bb.location}</h3>
                                <p className="text-sm text-gray-500 mb-3">{bb.type}</p>
                                <div className="flex justify-between text-sm mb-3">
                                    <span className="text-muted-foreground">الحجم:</span>
                                    <span className="font-medium">{bb.size}</span>
                                </div>
                                <Button variant="outline" className="w-full">التفاصيل</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EndUserLocations;
