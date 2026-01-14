
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const GovernmentRequests = () => {
    const requests = [
        { id: 'REQ-2025-884', type: 'تغيير محتوى إعلان', applicant: 'الشركة العالمية للدعاية', date: '2025-01-13', priority: 'high', status: 'pending' },
        { id: 'REQ-2025-883', type: 'ترخيص موقع جديد', applicant: 'مؤسسة النور', date: '2025-01-12', priority: 'medium', status: 'pending' },
        { id: 'REQ-2025-880', type: 'تجديد ترخيص', applicant: 'إبداع ميديا', date: '2025-01-10', priority: 'low', status: 'approved' },
        { id: 'REQ-2025-875', type: 'تغيير محتوى إعلان', applicant: 'مجموعة هائل', date: '2025-01-08', priority: 'high', status: 'rejected' },
    ];

    return (
        <DashboardLayout userRole="government" userName="المكتب الحكومي">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">طلبات الإعلانات</h1>
                    <p className="text-gray-500 mt-2">إدارة ومراجعة طلبات المواقع والمحتوى الجديدة.</p>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>الطلبات الواردة</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-right">رقم الطلب</TableHead>
                                    <TableHead className="text-right">نوع الطلب</TableHead>
                                    <TableHead className="text-right">مقدم الطلب</TableHead>
                                    <TableHead className="text-right">تاريخ التقديم</TableHead>
                                    <TableHead className="text-right">الأولوية</TableHead>
                                    <TableHead className="text-right">الحالة</TableHead>
                                    <TableHead className="text-right">إجراءات</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {requests.map((req) => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium">{req.id}</TableCell>
                                        <TableCell>{req.type}</TableCell>
                                        <TableCell>{req.applicant}</TableCell>
                                        <TableCell>{req.date}</TableCell>
                                        <TableCell>
                                            {req.priority === 'high' && <Badge variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-200">عاجل</Badge>}
                                            {req.priority === 'medium' && <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">متوسط</Badge>}
                                            {req.priority === 'low' && <Badge variant="outline">عادي</Badge>}
                                        </TableCell>
                                        <TableCell>
                                            {req.status === 'pending' && <Badge className="bg-yellow-500">قيد المراجعة</Badge>}
                                            {req.status === 'approved' && <Badge className="bg-green-500">مقبول</Badge>}
                                            {req.status === 'rejected' && <Badge className="bg-red-500">مرفوض</Badge>}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button size="icon" variant="ghost" title="عرض التفاصيل">
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                {req.status === 'pending' && (
                                                    <>
                                                        <Button size="icon" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50" title="موافقة">
                                                            <CheckCircle2 className="h-4 w-4" />
                                                        </Button>
                                                        <Button size="icon" variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50" title="رفض">
                                                            <XCircle className="h-4 w-4" />
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default GovernmentRequests;
