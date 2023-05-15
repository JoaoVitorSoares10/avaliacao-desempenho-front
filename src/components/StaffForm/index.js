import { Question } from "../Question";
import style from "./styles.module.scss";

export function StaffForm({ scores, setScores, StaffForm }) {
  return (
    <>
      <div className={style.container}>
        <h2>Indicadores de Desempenho</h2>
        <Question
          title={StaffForm[0].title}
          text={StaffForm[0].text}
          indice="produtividade"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[1].title}
          text={StaffForm[1].text}
          indice="prontidao"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[2].title}
          text={StaffForm[2].text}
          indice="localDeTrabalho"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[3].title}
          text={StaffForm[3].text}
          indice="conhecimentosDoTrabalho"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[4].title}
          text={StaffForm[4].text}
          indice="responsabilidade"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[5].title}
          text={StaffForm[5].text}
          indice="trabalhoEmEquipe"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[6].title}
          text={StaffForm[6].text}
          indice="melhoriaContínua"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[7].title}
          text={StaffForm[7].text}
          indice="organizaçãoPlanejamento"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[8].title}
          text={StaffForm[8].text}
          indice="prevençãoOrganizaçãoDeDesperdícios"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[9].title}
          text={StaffForm[9].text}
          indice="prevençãoDeAcidentes"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[10].title}
          text={StaffForm[10].text}
          indice="comunicacao"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[11].title}
          text={StaffForm[11].text}
          indice="aceitacao"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[12].title}
          text={StaffForm[12].text}
          indice="relacoes"
          value={scores}
          onSetValue={setScores}
        />
        <Question
          title={StaffForm[13].title}
          text={StaffForm[13].text}
          indice="cooperacao"
          value={scores}
          onSetValue={setScores}
        />
      </div>
    </>
  )
}