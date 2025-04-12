// Custom Item Module for PF2e
// Automatically adds traits and slot requirements to items

Hooks.on('createItem', (item) => {
  // Only act on items of a certain type, like alchemical
  if (item.type === 'consumable' && item.system?.traits) {
    // Add 'plant' and 'divine' traits if not already present
    const traits = new Set(item.system.traits.value);
    traits.add('plant');
    traits.add('divine');
    item.update({ 'system.traits.value': Array.from(traits) });

    // Optional: Add a custom slot field to the item (for Advanced Alchemy usage)
    if (!item.system.hasOwnProperty('customSlot')) {
      item.update({
        'system.customSlot': {
          value: 1,
          label: 'Alchemy Slot'
        }
      });
    }

    console.log(`Custom Item Module: Added traits to ${item.name}`);
  }
});
