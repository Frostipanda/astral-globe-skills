Hooks.on('renderActorSheet', (app, html, data) => {
    if (!html.find(".tabs a[data-tab='skillTree']").length) {
        // Add the Skill Tree tab without text, only the icon
        const tabButton = $(`<a class="item" data-tab="skillTree"><img src="modules/astral-globe-skills/icons/tab.png" title="Skill Tree"></a>`);
        html.find(".tabs").append(tabButton);

        // Create Content Section for the New Tab with your skill tree HTML, including buttons for skill selection
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
                    <!-- Example for Awakening Tree -->
                    <div class="tree-awakening">
                        <h3>Awakening (1 Piece)</h3>
                        <ul>
                            <li title="Gain the ability to understand and speak any language. This ability can be used once per long rest and lasts an hour.">
                                Astral Insight
                                <button type="button" class="select-skill" data-skill="Astral Insight">Select</button>
                            </li>
                            <!-- Add other skills similarly -->
                        </ul>
                    </div>
                    <!-- Include other trees similarly -->
                </div>
            </div>
        `);
        html.find(".sheet-body").append(skillTreeContent);

        // Tab button click handling
        tabButton.click(function() {
            html.find(".tabs a").removeClass("active");
            html.find(".tab").hide();
            tabButton.addClass("active");
            skillTreeContent.show();
        });

        // Handle skill selection
        skillTreeContent.find('.select-skill').click(function() {
            const skillName = $(this).data('skill');
            console.log(skillName + ' selected'); // Replace this with actual selection logic
        });
    }

    // Adjust styles for the icon and hide text if necessary through JavaScript
    // For a pure CSS solution, refer to the previous instructions and place them in your module's stylesheet
});
