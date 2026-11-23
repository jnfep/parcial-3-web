import { Type } from "class-transformer";
import { LoanRequestsStatus } from "../loan-requests.entity";
import { IsIn, IsOptional } from "class-validator";

export class ListLoanRequestsDto {
  @IsOptional()
  @IsIn([LoanRequestsStatus.PENDING, LoanRequestsStatus.APPROVED, LoanRequestsStatus.REJECTED])
  status?: LoanRequestsStatus; 

  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @Type(() => Number)
  toolId?: number;
}

