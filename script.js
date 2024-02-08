function verificar() {
    let data = new Date();

    let ano = data.getFullYear();

    let formuAno = document.getElementById('txtano');

    let res = document.querySelector('#res'); //COLOCAR DIV#RES ?


    if (formuAno.value.length == 0 || formuAno.value >= ano) {
        window.alert('ERRO! Verifique os dados e tente novamente');
    } else {

        let fsex = document.getElementsByName('radsex');

        let idade = ano - Number(formuAno.value);

        let genero = '';

        let img = document.createElement('img')
        img.setAttribute('id', 'foto');



        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //Criança masculino
                img.setAttribute('src','boy.jpg')
            } else if (idade > 12 && idade < 18) {
                //Jovem masculino
                img.setAttribute('src','jovemmasc.jpg')
            }else if(idade <= 50){
                //Homem Adulto
                img.setAttribute('src','man.jpg')
            }
            else{
                //Senhor idoso
                img.setAttribute('src','oldman.jpg')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //Criança menina
                img.setAttribute('src','girl.jpg')
            } else if (idade > 12 && idade < 18) {
                //Jovem feminino
                img.setAttribute('src','jovemfem.jpg')
            }else if(idade <= 50){
                //mulher Adulta
                img.setAttribute('src','woman.jpg')
            }
            else{
                //Senhora idosa
                img.setAttribute('src','oldwoman.jpg')
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }

}

