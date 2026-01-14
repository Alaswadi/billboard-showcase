
import DashboardLayout from '@/components/Layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const GovernmentCompanies = () => {
    const companies = [
        { id: 1, name: 'الشركة العالمية للدعاية والإعلان', lic: 'LIC-2022-001', phone: '777-123-456', status: 'active', boards: 45 },
        { id: 2, name: 'مؤسسة النور ميديا', lic: 'LIC-2023-089', phone: '733-987-654', status: 'warning', boards: 12 },
        { id: 3, name: 'إبداع للخدمات الإعلانية', lic: 'LIC-2024-112', phone: '711-555-444', status: 'active', boards: 28 },
        { id: 4, name: 'سبيس للدعاية', lic: 'LIC-2022-045', phone: '700-222-111', status: 'suspended', boards: 8 },
    ];

    return (
        <DashboardLayout userRole="government" userName="المكتب الحكومي">
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">الشركات المسجلة</h1>
                    <p className="text-gray-500 mt-2">دليل شركات الدعاية والإعلان المرخصة في النظام.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {companies.map(company => (
                        <Card key={company.id}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-lg">{company.name}</CardTitle>
                                {company.status === 'active' && <Badge className="bg-emerald-500">مرخص</Badge>}
                                {company.status === 'warning' && <Badge className="bg-yellow-500">عليه ملاحظات</Badge>}
                                {company.status === 'suspended' && <Badge variant="destructive">موقف</Badge>}
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">رقم الترخيص:</span>
                                        <span className="font-mono">{company.lic}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">عدد اللوحات:</span>
                                        <span className="font-bold">{company.boards}</span>
                                    </div>
                                    <div className="flex gap-2 mt-4 pt-4 border-t">
                                        <Button variant="outline" size="sm" className="flex-1">
                                            <Phone className="mr-2 h-4 w-4" />
                                            اتصال
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1">
                                            <Mail className="mr-2 h-4 w-4" />
                                            مراسلة
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default GovernmentCompanies;
