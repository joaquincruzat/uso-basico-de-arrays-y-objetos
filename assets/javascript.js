let radiologia = [
    {
        //Radiologia//
        horaDeAtencion: "11:00",
        medicoEspecialista: "IGNACIO SCHULZ",
        nombreDelPaciente: "FRANCISCA ROJAS",
        rutDelPaciente: "9878782-1",
        prevision: "FONASA",
        tipoDeExamen: "RADIOLOGIA",
    },
    {
        horaDeAtencion: "11:30",
        medicoEspecialista: "FEDERICO SUBERCASEAUX",
        nombreDelPaciente: "PAMELA ESTRADA",
        rutDelPaciente: "15345241-3",
        prevision: "ISAPRE",
        tipoDeExamen: "RADIOLOGIA",
    },
    {
        horaDeAtencion: "15:00",
        medicoEspecialista: "FERNANDO WURTHZ",
        nombreDelPaciente: "ARMANDO LUNA",
        rutDelPaciente: "16445345-9",
        prevision: "ISAPRE",
        tipoDeExamen: "RADIOLOGIA",
    },
    {
        horaDeAtencion: "15:30",
        medicoEspecialista: "ANA MARIA GODOY",
        nombreDelPaciente: "MANUEL GODOY",
        rutDelPaciente: "17666419-0",
        prevision: "FONASA",
        tipoDeExamen: "RADIOLOGIA",
    },
    {
        horaDeAtencion: "16:00",
        medicoEspecialista: "PATRICIA SUAZO",
        nombreDelPaciente: "RAMON ULLOA",
        rutDelPaciente: "14989389-K",
        prevision: "FONASA",
        tipoDeExamen: "RADIOLOGIA",
    }]

  let traumatologia= [
    {
        horaDeAtencion: "08:00",
        medicoEspecialista: "MARIA PAZ ALTUZARRA",
        nombreDelPaciente: "PAULA SANCHEZ",
        rutDelPaciente: "15554774-5",
        prevision: "FONASA",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "10:00",
        medicoEspecialista: "RAUL ARAYA",
        nombreDelPaciente: "ANGÉLICA NAVAS",
        rutDelPaciente: "15444147-9",
        prevision: "ISAPRE",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "10:30",
        medicoEspecialista: "MARIA ARRIAGADA",
        nombreDelPaciente: "ANA KLAPP",
        rutDelPaciente: "17879423-9",
        prevision: "ISAPRE",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "11:00",
        medicoEspecialista: "ALEJANDRO BADILLA",
        nombreDelPaciente: "FELIPE MARDONES",
        rutDelPaciente: "15474253-6",
        prevision: "ISAPRE",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "11:30",
        medicoEspecialista: "CECILIA BUDNIK",
        nombreDelPaciente: "DIEGO MARRE",
        rutDelPaciente: "16554741-K",
        prevision: "FONASA",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "12:00",
        medicoEspecialista: "ARTURO CAVAGNARO",
        nombreDelPaciente: "CECILIA MENDEZ",
        rutDelPaciente: "9747535-8",
        prevision: "ISAPRE",
        tipoDeExamen: "TRAUMATOLOGIA",
    },
    {
        horaDeAtencion: "12:30",
        medicoEspecialista: "ANDRES KANACRI",
        nombreDelPaciente: "MARCIAL SUAZO",
        rutDelPaciente: "11254785-5",
        prevision: "ISAPRE",
        tipoDeExamen: "TRAUMATOLOGIA",
    }]

 let dental= [
    {
        horaDeAtencion: "08:30",
        medicoEspecialista: "ANDREA ZUÑIGA",
        nombreDelPaciente: "MARCELA RETAMAL",
        rutDelPaciente: "11123425-6",
        prevision: "ISAPRE",
        tipoDeExamen: "DENTAL",
    },
    {
        horaDeAtencion: "11:00",
        medicoEspecialista: "MARIA PIA ZAÑARTU",
        nombreDelPaciente: "ANGEL MUÑOZ",
        rutDelPaciente: "9878789-2",
        prevision: "ISAPRE",
        tipoDeExamen: "DENTAL",
    },
    {
        horaDeAtencion: "11:30",
        medicoEspecialista: "SCARLETT WITTING",
        nombreDelPaciente: "MARIO KAST",
        rutDelPaciente: "7998789-5",
        prevision: "FONASA",
        tipoDeExamen: "DENTAL",
    },
    {
        horaDeAtencion: "13:00",
        medicoEspecialista: "FRANCISCO VON TEUBER",
        nombreDelPaciente: "KARIN FERNANDEZ",
        rutDelPaciente: "18887662-K",
        prevision: "FONASA",
        tipoDeExamen: "DENTAL",
    },
    {
        horaDeAtencion: "13:30",
        medicoEspecialista: "EDUARDO VIÑUELA",
        nombreDelPaciente: "HUGO SANCHEZ",
        rutDelPaciente: "17665461-4",
        prevision: "FONASA",
        tipoDeExamen: "DENTAL",
    },
    {
        horaDeAtencion: "14:00",
        medicoEspecialista: "RAQUEL VILLASECA",
        nombreDelPaciente: "ANA SEPULVEDA",
        rutDelPaciente: "14441281-K",
        prevision: "ISAPRE",
        tipoDeExamen: "DENTAL",
    }
]



document.getElementById("atencionesRadiologia").innerHTML = "Primera antención " + radiologia[0].nombreDelPaciente + " - " + radiologia[0].prevision+ " | "+
"Última atención: " + radiologia[radiologia.length - 1].nombreDelPaciente + " - " + radiologia[radiologia.length - 1].prevision;

document.getElementById("atencionesTraumatologia").innerHTML = "Primera antención " + traumatologia[0].nombreDelPaciente + " - " + traumatologia[0].prevision+ " | "+
"Última atención: " + traumatologia[traumatologia.length - 1].nombreDelPaciente + " - " + traumatologia[traumatologia.length - 1].prevision;

document.getElementById("atencionesDental").innerHTML = "Primera antención " + dental[0].nombreDelPaciente + " - " + dental[0].prevision+ " | "+
"Última atención: " + dental[dental.length - 1].nombreDelPaciente + " - " + dental[dental.length - 1].prevision;


//Tabla

let texto = `
    <thead>
     <tr>
        <th>Hora de Atención</th>
        <th>Médico especialista</th>
        <th>Nombre del paciente</th>
        <th>Rut del paciente</th>
        <th>Previsión</th>
     </tr>
    `
    for (var i = 0; i < radiologia.length; i++) {
        texto += `
        <tr>
            <td>${radiologia[i].horaDeAtencion}</td>
            <td>${radiologia[i].medicoEspecialista}</td>
            <td>${radiologia[i].nombreDelPaciente}</td>
            <td>${radiologia[i].rutDelPaciente}</td>
            <td>${radiologia[i].prevision}</td>
        </tr>
        `
    }

    document.getElementById ("tabla").innerHTML = texto;

    let texto2 = `
    <thead>
     <tr>
        <th>Hora de Atención</th>
        <th>Médico especialista</th>
        <th>Nombre del paciente</th>
        <th>Rut del paciente</th>
        <th>Previsión</th>
     </tr>
    `
    for (var i = 0; i < traumatologia.length; i++) {
        texto2 += `
        <tr>
            <td>${traumatologia[i].horaDeAtencion}</td>
            <td>${traumatologia[i].medicoEspecialista}</td>
            <td>${traumatologia[i].nombreDelPaciente}</td>
            <td>${traumatologia[i].rutDelPaciente}</td>
            <td>${traumatologia[i].prevision}</td>
        </tr>
        `
    }

    document.getElementById ("tabla2").innerHTML = texto2;

    let texto3 = `
    <thead>
     <tr>
        <th>Hora de Atención</th>
        <th>Médico especialista</th>
        <th>Nombre del paciente</th>
        <th>Rut del paciente</th>
        <th>Previsión</th>
     </tr>
    `
    for (var i = 0; i < dental.length; i++) {
        texto3 += `
        <tr>
            <td>${dental[i].horaDeAtencion}</td>
            <td>${dental[i].medicoEspecialista}</td>
            <td>${dental[i].nombreDelPaciente}</td>
            <td>${dental[i].rutDelPaciente}</td>
            <td>${dental[i].prevision}</td>
        </tr>
        `
    }

    document.getElementById ("tabla3").innerHTML = texto3; 