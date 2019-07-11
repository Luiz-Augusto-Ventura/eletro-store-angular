import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto';
import { ActivatedRoute } from '@angular/router';
import { ServicosService } from '../servicos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  @Input() produto: Produto;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private servicos: ServicosService)
    {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.produto = this.servicos.getListaProdutos().find(p => p.id == this.id);
    }

  ngOnInit() {
  }

  reservar(P: Produto) {
    this.servicos.reservarProduto(P);
    console.log("Carrinho: " + this.produto);
  }

}
