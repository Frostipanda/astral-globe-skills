Hooks.on('renderActorSheet', async (app, html, data) => {
    if (!html.find(".tabs a[data-tab='skillTree']").length) {
        const tabButton = $(`<a class="item" data-tab="skillTree"><img src="modules/astral-globe-skills/icons/tab.png" title="Skill Tree"></a>`);
        html.find(".tabs").append(tabButton);

        const skillTreeContent = $(`
            <div class="tab" data-tab="skillTree" style="display: none;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="float: right;">
                        <label>Pieces Collected: </label>
                        <input type="number" id="piecesCollected" name="piecesCollected" min="0">
                    </div>
                    <h2 style="font-weight: bold;">Astral Ascendance</h2>
                </div>
                <div class="skill-tree-section">
                    <div class="tree-awakening">
                        <h3>Awakening (1 Piece)</h3>
                        <ul>
                            <li title="Gain the ability to understand and speak any language. This ability can be used once per long rest and lasts an hour.">
                                Astral Insight
                                <button type="button" class="select-skill" data-skill="Astral Insight">Select</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `);
        html.find(".sheet-body").append(skillTreeContent);

        tabButton.click(function() {
            html.find(".tabs a").removeClass("active");
            html.find(".tab").hide();
            tabButton.addClass("active");
            skillTreeContent.show();
        });

        // Handle skill selection
        skillTreeContent.find('.select-skill').click(async function() {
            const skillName = $(this).data('skill');
            let selectedSkills = app.actor.getFlag('astral-globe-skills', 'selectedAstralSkills') || [];
            if (!selectedSkills.includes(skillName)) {
                selectedSkills.push(skillName);
                await app.actor.setFlag('astral-globe-skills', 'selectedAstralSkills', selectedSkills);
                console.log(skillName + ' selected and saved');
                $(this).addClass('selected'); // Indicate that the skill is selected
            }
        });

        // Load selected skills and update UI
        let selectedSkills = app.actor.getFlag('astral-globe-skills', 'selectedAstralSkills') || [];
        selectedSkills.forEach(skillName => {
            skillTreeContent.find(`.select-skill[data-skill='${skillName}']`).addClass('selected');
        });
    }
});
