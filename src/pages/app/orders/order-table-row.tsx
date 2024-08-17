import { Button } from "@/components/ui/button";
import { TableCell, TableHead, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xs">
          <Search className="h-3 w-3">
            <span className="sr-only">Detalhes do pedido</span>
          </Search>
        </Button>
      </TableCell>
      <TableHead className="font-mono text-sm font-medium">
        dasdsadasdsd
      </TableHead>
      <TableHead className="text-muted-foreground">há 15 minutos</TableHead>
      <TableHead>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableHead>
      <TableHead className="font-medium">Ítalo Santos</TableHead>
      <TableHead className="font-medium">R$ 149,00</TableHead>
      <TableHead>
        <Button variant="ghost" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableHead>
      <TableHead>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableHead>
    </TableRow>
  );
}
