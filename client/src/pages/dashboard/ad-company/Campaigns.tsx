
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const AdCompanyCampaigns = () => {
    return (
        <DashboardLayout userRole="advertising_company" userName="شركة النور للدعاية">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">حملاتي</h1>
                    <p className="text-gray-500 mt-2">تتبع الحملات الإعلانية الجارية والسابقة للعملاء.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>الحملات النشطة</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">اسم الحملة</TableHead>
                                    <TableHead className="text-right">العميل</TableHead>
                                    <TableHead className="text-right">الفترة</TableHead>
                                    <TableHead className="text-right">عدد اللوحات</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">إطلاق منتج جديد 2025</TableCell>
                                    <TableCell>مجموعة هائل سعيد</TableCell>
                                    <TableCell>Jan 1 - Feb 15</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell><Badge className="bg-emerald-500">نشطة</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">عروض رمضان</TableCell>
                                    <TableCell>سوبرماركت الخير</TableCell>
                                    <TableCell>Feb 20 - Mar 30</TableCell>
                                    <TableCell>5</TableCell>
                                    <TableCell><Badge variant="outline">مجدولة</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">توعية صحية</TableCell>
                                    <TableCell>وزارة الصحة</TableCell>
                                    <TableCell>Dec 1 - Jan 15</TableCell>
                                    <TableCell>20</TableCell>
                                    <TableCell><Badge className="bg-emerald-500">نشطة</Badge></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default AdCompanyCampaigns;
