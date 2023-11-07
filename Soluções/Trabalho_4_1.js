const readline = require('readline-sync');

// Array para armazenar as notas dos alunos
const notasDosAlunos = [];

// Função para adicionar notas
function adicionarNota() {
    const professorName = readline.question('Nome do Professor: ');
    const subjectName = readline.question('Nome da Disciplina: ');
    const studentName = readline.question('Nome do Aluno: ');

    const notas = [];
    for (let i = 1; i <= 6; i++) {
        const nota = parseFloat(readline.question(`Nota ${i}: `));
        notas.push(nota);
    }

    const media = calcularMedia(notas);
    const aprovado = media >= 7;

    notasDosAlunos.push({
        professor: professorName,
        disciplina: subjectName,
        aluno: studentName,
        notas: notas,
        media: media,
        aprovado: aprovado
    });

    console.log(`Média: ${media.toFixed(2)}`);
    console.log(aprovado ? 'Aprovado' : 'Reprovado');

    listarNotasDosAlunos();
    calcularEstatisticas();
}

// Função para calcular média
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

// Função para listar notas dos alunos
function listarNotasDosAlunos() {
    console.log('Notas dos Alunos:');
    notasDosAlunos.forEach((aluno, index) => {
        console.log(`Aluno ${index + 1}: ${aluno.aluno}, Média: ${aluno.media.toFixed(2)}, Status: ${aluno.aprovado ? 'Aprovado' : 'Reprovado'}`);
    });
}

// Função para calcular estatísticas
function calcularEstatisticas() {
    const medias = notasDosAlunos.map(aluno => aluno.media);
    const notaMaisAlta = Math.max(...medias);
    const mediaDaTurma = medias.reduce((acc, curr) => acc + curr, 0) / medias.length;

    console.log('Estatísticas:');
    console.log(`Nota Mais Alta: ${notaMaisAlta.toFixed(2)}`);
    console.log(`Média da Turma: ${mediaDaTurma.toFixed(2)}`);
}

// Loop para adicionar várias notas
while (true) {
    adicionarNota();

    const continuar = readline.keyInYNStrict('Deseja adicionar mais notas?');
    if (!continuar) {
        break;
    }
}
