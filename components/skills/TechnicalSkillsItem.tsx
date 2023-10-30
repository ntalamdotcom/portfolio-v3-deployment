export default function TechnicalSkillsItem(
    { skillName,
        percentageExpert, }
) {
    return <>
        <div className="candidatos">
            <div className="parcial">
                <div className="info">
                    <div className="nome">{skillName}</div>
                    <div className="percentagem-num">{percentageExpert}%</div>
                </div>
                <div className="progressBar">
                    <div className="percentagem"
                        style={{ width: percentageExpert + "%" }}
                    ></div>
                </div>
            </div>
        </div>
    </>
}