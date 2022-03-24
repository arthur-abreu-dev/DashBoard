import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroContasComponent } from './cadastro-contas/cadastro-contas.component';
import { CadastroGastosComponent } from './cadastro-gastos/cadastro-gastos.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DadosPerfilComponent } from './dados-perfil/dados-perfil.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { QuadroPrincipalComponent } from './quadro-principal/quadro-principal.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-contas', component: CadastroContasComponent},
  {path: 'cadastro-gastos', component: CadastroGastosComponent},
  {path: 'configuracoes', component: ConfiguracoesComponent},
  {path: 'dados-perfil', component: DadosPerfilComponent},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quadro-principal', component: QuadroPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
