import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { requestValidationPipe } from "../common/request-validation.pipe";
import { CreateLoanRequestDto } from "./dto/create-loan-request.dto";
import {ListLoanRequestsDto} from "./dto/list-loan-requests.dto";
import { LoanRequestsService } from "./loan-requests.service";

@UseGuards(AuthGuard("jwt"))
@Controller("loan-requests")
export class LoanRequestsController {
  constructor(private readonly service: LoanRequestsService) {}

  @Get()
  findAll(@Query(requestValidationPipe)query: ListLoanRequestsDto) { 
    
    // TODO BACK-A: recibir la consulta con @Query, validarla con el pipe y pasar el filtro.
    return this.service.findAll(query.status);
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body(requestValidationPipe) dto: CreateLoanRequestDto) {
    return this.service.create(dto);
  }
}

function Query(requestValidationPipe: ValidationPipe): (target: LoanRequestsController, propertyKey: "findAll", parameterIndex: 0) => void {
  throw new Error("Function not implemented.");
}

