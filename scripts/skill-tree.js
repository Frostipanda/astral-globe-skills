Hooks.on('renderActorSheet', (app, html, data) => {
  // Check if the custom tab already exists to avoid duplicates when rendering multiple times
  if (html.find(".tab.skill-tree").length === 0) {
    addSkillTreeTab(app, html, data);
  }
});

function addSkillTreeTab(app, html, data) {
  // Add Tab Button
  const tabs = html.find('.tabs[data-group="primary"]');
  const skillTreeTabButton = $('<a class="item" data-tab="skillTree">Skill Tree</a>');
  tabs.append(skillTreeTabButton);

  // Add Tab Content Area
  const sheetBody = html.find('.sheet-body');
  const skillTreeContent = $(`
    <div class="tab" data-group="primary" data-tab="skillTree">
      <div style="text-align: center; margin-bottom: 20px;">
        <div style="float: right;">
          <label>Pieces Collected</label>
          <input type="number" id="piecesCollected" name="piecesCollected" min="0">
        </div>
        <h2 style="font-weight: bold;">Astral Ascendance</h2>
      </div>
      <div class="skill-tree-section">
        <!-- Awakening -->
        <div class="tree-awakening">
          <h3>Awakening (1 Piece)</h3>
          <ul>
            <li title="Gain the ability to understand and speak any language. This ability can be used once per long rest and lasts an hour.">Astral Insight</li>
            <li title="Players gain one inspiration point per session.">Celestial Insight</li>
            <li title="Gain resistance to a specific type of elemental damage (player's choice upon unlocking this skill). This ability can be used once per long rest and lasts an hour.">Stellar Resilience</li>
          </ul>
        </div>
        <!-- Ascendance -->
        <div class="tree-ascendance" style="margin-left: 20px;">
          <h3>Ascendance (3 Pieces)</h3>
          <ul>
            <li title="The creature can teleport 60ft, usable once per long rest.">Void Step</li>
            <li title="Imbue weapons with radiant energy, dealing extra 1d8 radiant damage for a limited number of attacks equal to your Wisdom Modifier.">Starfire Touch</li>
            <li title="Can cast the Detect Thoughts spell without any components one per short rest.">Cosmic Empathy</li>
          </ul>
        </div>
        <!-- Apotheosis -->
        <div class="tree-apotheosis" style="margin-left: 20px;">
          <h3>Apotheosis (6 Pieces)</h3>
          <ul>
            <li title="Project an astral form for scouting or communication...">Astral Projection</li>
            <li title="Summon a celestial or astral entity to aid in combat once per long rest.">Celestial Guardian</li>
            <li title="Create a 30ft radius of darkness or blinding light...">Eclipse</li>
          </ul>
        </div>
        <!-- Mastery -->
        <div class="tree-mastery" style="margin-left: 20px;">
          <h3>Mastery (Assembled)</h3>
          <p title="Once per campaign, reset a catastrophic event or decision.">Celestial Convergence</p>
        </div>
      </div>
    </div>
  `);
  sheetBody.append(skillTreeContent);

  // Additional logic for handling skill tree interactions can go here
}
