import { h, Fragment } from 'preact'
import Generator from "./Generator";

export default () => (
    <div className="container">
        <div className="py-4 text-center">
            <h1 class="display-4">Задача #12</h1>
            <p className="lead">Определение адреса сети</p>
            <p>В терминологии сетей TCP/IP маской сети называют двоичное число, которое показывает, какая часть IP-адреса узла сети относится к адресу сети, а какая – к адресу узла в этой сети. Адрес сети получается в результате применения поразрядной конъюнкции к заданному IP-адресу узла и его маске. По заданным IP-адресу узла и маске определите адрес сети</p>
            <Generator/>
        </div>
    </div>
)
