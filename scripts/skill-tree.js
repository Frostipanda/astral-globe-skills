Hooks.on("renderActorSheet", (app, html, data) => {
    if (!html.find(".tabs a[data-tab='skillTree']").length) {
        // Create the tab button with an icon
        const tabButton = $(`<a class="item control" data-group="primary" data-tab="skillTree" data-tooltip="Skill Tree" aria-label="Skill Tree"><img src="modules/astral-globe-skills/icons/tab.png" style="width: 20px; height: 20px; vertical-align: middle;"></a>`);
        html.find(".tabs[data-group='primary']").append(tabButton);

        // Create the tab content
        const tabContent = $(`
            <div class="tab" data-group="primary" data-tab="skillTree" style="display: none;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <div style="float: right;">
                        <label>Pieces Collected</label>
                        <input type="number" id="piecesCollected" name="piecesCollected" min="0">
                    </div>
                    <h2 style="font-weight: bold;">Astral Ascendance</h2>
                </div>
                <!-- Your skill tree content here -->
            </div>
        `);
        html.find(".sheet-body").append(tabContent);

        // Handle clicking on the new tab
        tabButton.click((ev) => {
            html.find(".tabs a").removeClass("active"); // Remove active class from all tabs
            html.find(".tab").hide(); // Hide all content sections
            tabButton.addClass("active"); // Activate the new tab
            tabContent.show(); // Show the new tab content
        });
    }
});
