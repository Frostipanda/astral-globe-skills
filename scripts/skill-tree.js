Hooks.on('renderActorSheet', (app, html, data) => {
    if (!html.find(".tabs a[data-tab='skillTree']").length) {
        // Include the custom tab icon in the tab button
        const tabIconPath = "modules/astral-globe-skills/icons/tab.png"; // Adjust the path as necessary
        const tabButton = $(`<a class="item" data-tab="skillTree"><img src="${tabIconPath}" style="width: 20px; height: 20px; vertical-align: middle;"> Skill Tree</a>`);
        html.find(".tabs").append(tabButton);

        // Create Content Section for the New Tab with your skill tree HTML
        const skillTreeContent = $(`
            <div class="tab" data-tab="skillTree" style="display: none;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="float: right;">
                        <label>Pieces Collected</label>
                        <input type="number" id="piecesCollected" name="piecesCollected" min="0">
                    </div>
                    <h2 style="font-weight: bold;">Astral Ascendance</h2>
                </div>
                <div class="skill-tree-section">
                    <!-- Your detailed skill tree content goes here -->
                    <!-- Example for Awakening Tree -->
                    <div class="tree-awakening">
                        <h3>Awakening (1 Piece)</h3>
                        <ul>
                            <li title="Gain the ability to understand and speak any language. This ability can be used once per long rest and lasts an hour.">Astral Insight</li>
                            <li title="Players gain one inspiration point per session.">Celestial Insight</li>
                            <li title="Gain resistance to a specific type of elemental damage (player's choice upon unlocking this skill). This ability can be used once per long rest and lasts an hour.">Stellar Resilience</li>
                        </ul>
                    </div>
                    <!-- Include other trees similarly -->
                </div>
            </div>
        `);
        html.find(".sheet-body").append(skillTreeContent);

        // Modify Active Tab Class on Click
        tabButton.click(function() {
            html.find(".tabs a").removeClass("active"); // Remove active class from all tabs
            html.find(".tab").hide(); // Hide all content sections
            tabButton.addClass("active"); // Set current tab as active
            skillTreeContent.show(); // Show the skill tree content section
        });
    }
});
