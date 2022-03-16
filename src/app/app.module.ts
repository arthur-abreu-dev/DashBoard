import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuadroPrincipalComponent } from './quadro-principal/quadro-principal.component';
import { LoginComponent } from './login/login.component';
import { DadosPerfilComponent } from './dados-perfil/dados-perfil.component';
import { CadastroContasComponent } from './cadastro-contas/cadastro-contas.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { CadastroGastosComponent } from './cadastro-gastos/cadastro-gastos.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuadroPrincipalComponent,
    LoginComponent,
    DadosPerfilComponent,
    CadastroContasComponent,
    ExtratoComponent,
    CadastroGastosComponent,
    ConfiguracoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
