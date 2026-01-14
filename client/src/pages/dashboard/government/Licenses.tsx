
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const GovernmentLicenses = () => {
    return (
        <DashboardLayout userRole="government" userName="المكتب الحكومي">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">التراخيص والمدفوعات</h1>
                    <p className="text-gray-500 mt-2">متابعة تحصيل رسوم التراخيص وتجديدها.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">الإيرادات المحصلة (هذا الشهر)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12,450,000 ر.ي</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">التراخيص النشطة</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">843</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium text-gray-500">مدفوعات متأخرة</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">24</div>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>آخر العمليات المالية</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">رقم الفاتورة</TableHead>
                                    <TableHead className="text-right">الجهة</TableHead>
                                    <TableHead className="text-right">المبلغ</TableHead>
                                    <TableHead className="text-right">التاريخ</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                    <TableHead className="text-right">طباعة</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>INV-00921</TableCell>
                                    <TableCell>الشركة العالمية للدعاية</TableCell>
                                    <TableCell>450,000 ر.ي</TableCell>
                                    <TableCell>2025-01-12</TableCell>
                                    <TableCell><Badge className="bg-green-500">مدفوع</Badge></TableCell>
                                    <TableCell><Button variant="ghost" size="sm">PDF</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>INV-00922</TableCell>
                                    <TableCell>مؤسسة النور</TableCell>
                                    <TableCell>120,000 ر.ي</TableCell>
                                    <TableCell>2025-01-11</TableCell>
                                    <TableCell><Badge className="bg-green-500">مدفوع</Badge></TableCell>
                                    <TableCell><Button variant="ghost" size="sm">PDF</Button></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>INV-00923</TableCell>
                                    <TableCell>إبداع ميديا</TableCell>
                                    <TableCell>850,000 ر.ي</TableCell>
                                    <TableCell>2025-01-10</TableCell>
                                    <TableCell><Badge variant="secondary">معلق</Badge></TableCell>
                                    <TableCell><Button variant="ghost" size="sm">PDF</Button></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default GovernmentLicenses;
