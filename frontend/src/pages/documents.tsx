import { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PageHeader } from '@/components/page-header';
import { MOCK_DOCUMENTS } from '@/data/mock';

const TYPE_VARIANTS: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
  policy: 'secondary',
  technical: 'default',
  assessment: 'outline',
  report: 'secondary',
};

export function DocumentsPage() {
  const [search, setSearch] = useState('');

  const filtered = MOCK_DOCUMENTS.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.framework.toLowerCase().includes(search.toLowerCase()) ||
      doc.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-svh flex-col">
      <PageHeader title="Documents">
        <Button size="sm">
          <Upload className="mr-1 size-4" />
          Upload
        </Button>
      </PageHeader>

      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto max-w-4xl space-y-4">
          <div className="relative">
            <Search className="text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2" />
            <Input
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Framework</TableHead>
                  <TableHead>Uploaded</TableHead>
                  <TableHead className="text-right">Size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-muted-foreground py-8 text-center">
                      No documents found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((doc) => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>
                        <Badge variant={TYPE_VARIANTS[doc.type] ?? 'default'}>{doc.type}</Badge>
                      </TableCell>
                      <TableCell>{doc.framework}</TableCell>
                      <TableCell>{doc.uploadedAt}</TableCell>
                      <TableCell className="text-right">{doc.size}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
