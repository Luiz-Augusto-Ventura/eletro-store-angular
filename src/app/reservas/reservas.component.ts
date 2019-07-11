import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../servicos.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  listaReservas;

  constructor(
    private servicos: ServicosService,
    public activeModal: NgbActiveModal
    ) {
    this.listaReservas = servicos.getReservasProdutos();
  }

  ngOnInit() {
  }

  removeReserva(id: number) {
    this.listaReservas = this.servicos.removeReserva(id);
  }
}
