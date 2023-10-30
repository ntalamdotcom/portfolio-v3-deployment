/**
 * 
 * @param percentajeExpertice A string that should contain a number and the perc symbol. Eg: 30% 
 * @param skillName A string that name the skill 
 * @returns 
 */
export default function SkillsBarItem({
    skillName,
    porcentaje,
}) {
    return <>
        <li>
            <div className="mh-progress mh-progress-circle active"
                data-progress={porcentaje}
                style={{ position: "relative", }}>
                <svg
                    style={{
                        filter: "drop-shadow(0px 0px 3px red)",
                    }}
                    viewBox="0 0 100 100">
                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                        stroke="rgba(255, 255, 255, 1.0)"
                        stroke-width="5"
                        fill-opacity="0"
                    // style={{ filter: "drop-shadow(0px 0px 3px red)", }}
                    >
                    </path>
                    <path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                        stroke="rgba(255, 255, 255, 1.0)"
                        stroke-width="5" fill-opacity="0"
                        style={{
                            strokeDasharray: "298.493, 298.493",
                            // filter: "drop-shadow(0 0 5px red);",
                            strokeDashoffset: 300 - (300 * (porcentaje / 100))
                        }}
                    >
                    </path></svg><p className="progressbar-text"
                        style={{
                            position: "absolute",
                            top: 50, left: 50,
                            padding: "0px", margin: "0px",
                            transform: "translate(-50%, -50%)",
                            color: "rgb(85, 85, 85)"
                        }}>{porcentaje}%</p></div>
            <div className="pr-skill-name">{skillName}</div>
        </li>
    </>
}