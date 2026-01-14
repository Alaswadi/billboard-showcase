import { useState } from 'react';
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Search, Filter, Ruler, Banknote, Lightbulb, Layers, Calendar, Info } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { billboards } from '@/data/billboards';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import MapComponent from '@/components/MapComponent';

const GovernmentBillboards = () => {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const [selectedBillboard, setSelectedBillboard] = useState<any>(null);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active': return <Badge className="bg-emerald-500">نشط</Badge>;
            case 'maintenance': return <Badge className="bg-orange-500">صيانة</Badge>;
            case 'expired': return <Badge variant="destructive">منتهي</Badge>;
            default: return <Badge variant="secondary">{status}</Badge>;
        }
    };

    return (
        <DashboardLayout userRole="government" userName="المكتب الحكومي">
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">إدارة اللوحات الإعلانية</h1>
                        <p className="text-gray-500 mt-2">قائمة بجميع اللوحات المسجلة في النظام وحالتها.</p>
                    </div>
                    <Button onClick={() => setIsMapOpen(true)}>
                        <MapPin className="ml-2 h-4 w-4" />
                        عرض الخريطة
                    </Button>
                </div>

                <Card>
                    <CardHeader className="pb-3">
                        <div className="flex justify-between items-center">
                            <CardTitle>سجل اللوحات</CardTitle>
                            <div className="flex gap-2 w-1/3">
                                <div className="relative w-full">
                                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <Input placeholder="بحث برقم اللوحة أو الموقع..." className="pr-9" />
                                </div>
                                <Button variant="outline" size="icon">
                                    <Filter className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right w-[100px]">صورة</TableHead>
                                    <TableHead className="text-right">رقم اللوحة</TableHead>
                                    <TableHead className="text-right">الموقع</TableHead>
                                    <TableHead className="text-right">النوع والحجم</TableHead>
                                    <TableHead className="text-right">الشركة المشغلة</TableHead>
                                    <TableHead className="text-right">تاريخ الانتهاء</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                    <TableHead className="text-right">إجراءات</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {billboards.map((bb, index) => (
                                    <TableRow key={bb.id}>
                                        <TableCell>
                                            <div className="h-12 w-20 rounded overflow-hidden">
                                                <img
                                                    src={`/images/ads/ad${(index % 5) + 1}.png`}
                                                    alt="Billboard"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">{bb.id}</TableCell>
                                        <TableCell>{bb.location}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col">
                                                <span>{bb.type}</span>
                                                <span className="text-xs text-gray-500">{bb.size}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{bb.company}</TableCell>
                                        <TableCell>{bb.expiry}</TableCell>
                                        <TableCell>{getStatusBadge(bb.status)}</TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm" onClick={() => setSelectedBillboard(bb)}>التفاصيل</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                    <DialogContent className="max-w-4xl h-[80vh]">
                        <DialogHeader>
                            <DialogTitle>خريطة اللوحات الإعلانية</DialogTitle>
                        </DialogHeader>
                        <div className="flex-1 w-full h-full min-h-[500px]">
                            <MapComponent
                                height="100%"
                                markers={billboards.map(bb => ({
                                    id: bb.id,
                                    position: bb.coordinates,
                                    title: bb.location,
                                    description: `${bb.company} - ${bb.type}`,
                                    color: bb.color
                                }))}
                            />
                        </div>
                    </DialogContent>
                </Dialog>

                <Dialog open={!!selectedBillboard} onOpenChange={(open) => !open && setSelectedBillboard(null)}>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        {selectedBillboard && (
                            <>
                                <DialogHeader>
                                    <DialogTitle className="text-2xl flex justify-between items-center">
                                        <span>{selectedBillboard.location}</span>
                                        {getStatusBadge(selectedBillboard.status)}
                                    </DialogTitle>
                                    <p className="text-gray-500 mt-1">{selectedBillboard.company}</p>
                                </DialogHeader>

                                <div className="space-y-6 mt-4">
                                    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                        <img
                                            src={selectedBillboard.images[0]}
                                            alt={selectedBillboard.location}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-bold text-lg border-b pb-2 flex items-center gap-2">
                                            <Info className="w-5 h-5 text-blue-600" />
                                            تفاصيل اللوحة
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><Banknote className="w-3 h-3" /> السعر اليومي</span>
                                                <p className="font-medium">{selectedBillboard.dailyRate}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><Ruler className="w-3 h-3" /> الأبعاد</span>
                                                <p className="font-medium">{selectedBillboard.dimensions}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><Layers className="w-3 h-3" /> عدد الأوجه</span>
                                                <p className="font-medium">{selectedBillboard.faces} أوجه</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><Lightbulb className="w-3 h-3" /> الإضاءة</span>
                                                <p className="font-medium">{selectedBillboard.lighting}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> تاريخ الانتهاء</span>
                                                <p className="font-medium">{selectedBillboard.expiry}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-sm text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> الإحداثيات</span>
                                                <p className="font-medium text-xs font-mono mt-1" dir="ltr">{selectedBillboard.coordinates.join(', ')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg border-b pb-2">الوصف</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {selectedBillboard.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 flex gap-3">
                                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">تعديل البيانات</Button>
                                        <Button variant="outline" className="flex-1 text-red-600 hover:bg-red-50 hover:text-red-700 borderColor-red-200">إبلاغ عن مخالفة</Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    );
};

export default GovernmentBillboards;
