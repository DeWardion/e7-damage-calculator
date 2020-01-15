const dot = {
	bleed: 'bleed',
	burn: 'burn'
};

const classType = {
	knight: 'knight',
	mage: 'mage',
	ranger: 'ranger',
	soul_weaver: 'soul-weaver',
	thief: 'thief',
	warrior: 'warrior',
};

const element = {
	ice: 'ice',
	fire: 'fire',
	earth: 'earth',
	dark: 'dark',
	light: 'light',
};

const heroes = {
	achates: {
		name: 'Achates',
		element: element.fire,
		classType: classType.soul_weaver,
		stats: {}, 
		skills: {
			s1: { 
				dmg: 0,
				name: 'S1',
				mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
		}
	},
	adlay: {
		name: 'Adlay',
		element: element.earth,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.25 : 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	ains: {
		name: 'Ains',
		element: element.earth,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1',
				mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s1_crit: {
				mola: 0,
				onlyCrit: true,
				name: 'S1 Satisfying Strike',
				rate: 1,
				pow: 1,
				enhance: 's1'
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.8 : 1.5,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	aither: {
		name: 'Aither',
		element: element.ice,
		classType: classType.soul_weaver,
		barrier: () => heroS.atk,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			}
		}
	},
	alencia: {
		name: 'Alencia',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0, 0.1, 0, 0.15],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				name: 'Trample',
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0, 0.1, 0, 0.15],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.15,
				enhance: [0.05, 0.05, 0, 0.05, 0.15],
			}
		}
	},
	alexa: {
		name: 'Alexa',
		element: element.ice,
		classType: classType.thief,
		//form: [elements.target_nb_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0.15],
				extraAtk:true,
				xName: 'S1 Extra Attack',
				xRate: 0.75,
				xPow: 1,
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.9,
				mult: () => 1 + app.enemy.numDebuffs*0.15,
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
			}
		}
	},
	all_rounder_wanda: {
		name: 'All-Rounder Wanda',
		element: element.dark,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 0.95,
				mult: () => app.enemy.target ? 1.35 : 1,
				enhance: [0.05, 0, 0, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.9,
				enhance: [0.05, 0.05, 0, 0, 0.15, 0.15]
			}
		}
	},
	ambitious_tywin: {
		name: 'Ambitious Tywin',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.6,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0, 0.05, 0, 0, 0.05, 0.15]
			},
		}
	},
	angelic_montmorancy: {
		name: 'Angelic Montmorancy',
		element: element.ice,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	angelica: {
		name: 'Angelica',
		element: element.ice,
		classType: classType.soul_weaver,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.15,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	apocalypse_ravi: {
		name: 'Apocalypse Ravi',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.8 : 1,
				pow: 0.95,
				flat: (soulburn) => app.heroS.hp * (soulburn ? 0.2 : 0.12),
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.3,
				pow: 0.95,
				flat: () => app.heroS.hp * 0.2,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	aramintha: {
		name: 'Aramintha',
		element: element.fire,
		classType: classType.mage,
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.85,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
			}
		}
	},
	arbiter_vildred: {
		name: 'Arbiter Vildred',
		element: element.dark,
		classType: classType.thief,
		//form: [elements.caster_full_focus],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.975,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => {
					if (app.heroS.full_focus) {
						return soulburn ? 1.55 : 1.23;
					} else {
						return soulburn ? 1.29 : 1.04;
					}
				},
				pow: 0.85,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
			}
		}
	},
	armin: {
		name: 'Armin',
		element: element.earth,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.9,
				flat: () => app.heroS.def*0.6,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.3,
				pow: 0.9,
				flat: () => app.heroS.def*0.5,
				enhance: [0.05, 0.1, 0.1, 0, 0, 0.15]
			}
		}
	},
	arowell: {
		name: 'Arowell',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.09,
		barrierEnhance: 's2',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 0.95,
				flat: () => app.heroS.hp*0.02,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.02, 0.02, 0.02]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.95,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	assassin_cartuja: {
		name: 'Assassin Cartuja',
		element: element.dark,
		classType: classType.warrior,
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	assassin_cidd: {
		name: 'Assassin Cidd',
		element: element.dark,
		classType: classType.thief,
		//form: [elements.caster_speed, elements.target_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2: 1.5,
				pow: 0.95,
				mult: () => 1 + app.heroS.spd*0.001 + app.enemy.spd*0.003,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	assassin_coli: {
		name: 'Assassin Coli',
		element: element.dark,
		classType: classType.thief,
		//form: [elements.caster_speed, elements.caster_stealth],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: () => app.heroS.stealth ? 1.2 : 0.9,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 3 : 1.5,
				pow: 0.8,
				mult: () => 1 + app.heroS.spd*0.001125,
				enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15]
			}
		}
	},
	auxiliary_lots: {
		name: 'Auxiliary Lots',
		element: element.dark,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.8,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1 : 0.8,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	azalea: {
		name: 'Azalea',
		element: element.fire,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0, 0.1, 0, 0.15, 0]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0, 0, 0.05, 0.05]
			},
		}
	},
	baal_and_sezan: {
		name: 'Baal & Sezan',
		element: element.fire,
		classType: classType.mage,
		//form: [elements.target_nb_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.15, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.35 : 1.1,
				pow: 0.9,
				mult: () => 1 + (app.enemy.numDebuffs*0.15),
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	baiken: {
		name: 'Baiken',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.target_bleed_detonate],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.85 : 1.6,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15],
				detonate: dot.bleed,
				detonation: () => 1.3
			}
		}
	},
	basar: {
		name: 'Basar',
		element: element.earth,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 0.9,
				enhance: [0.05, 0.1, 0, 0.1, 0.15]
			},
		}
	},
	bask: {
		name: 'Bask',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 0.9,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0, 0.1, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
			}
		}
	},
	batisse: {
		name: 'Batisse',
		element: element.dark,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s1_rock_smash: {
				name: 'S1 Rock Smash',
				rate: 0.5,
				pow: 0.95,
				enhance_from: 's1',
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	bellona: {
		name: 'Bellona',
		element: element.earth,
		classType: classType.ranger,
		//form: [elements.target_max_hp, elements.nb_targets],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				flat: () => app.enemy.hp * 0.04,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 0.95,
				mult: () => app.enemy.numTargets > 1 ? 1 + (app.enemy.numTargets - 1) * 0.1 : 1,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.2 : 0.95,
				pow: 1,
				enhance: [0.15, 0, 0, 0, 0.15]
			}
		}
	},
	benevolent_romann: {
		name: 'Benevolent Romann',
		element: element.light,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			mana_burst: {
				name: 'Mana Burst',
				rate: 0.5,
				pow: 1,
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1.1,
				enhance: [0.05, 0, 0, 0, 0.15]
			}
		}
	},
	blaze_dingo: {
		name: 'Blaze Dingo',
		element: element.light,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.5,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			}
		}
	},
	blood_blade_karin: {
		name: 'Blood Blade Karin',
		element: element.dark,
		classType: classType.thief,
		//form: [elements.caster_hp_pc],
		atkUp: () => {
			let mult = 1;
			let boost = 0.167;
			for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
				boost += 0.167 * heroes.blood_blade_karin.skills.s2.enhance[i];
			}

			if (app.heroS.curHP < 75) mult += boost;
			if (app.heroS.curHP < 50) mult += boost;
			if (app.heroS.curHP < 25) mult += boost;

			return mult;
		},
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: 1.2,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			},
		}
	},
	butcher_corps_inquisitor: {
		name: 'Butcher Corps Inquisitor',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.2 : 1.5,
				pow: 0.85,
				mult: () => 1 + (100-app.heroS.curHP)*0.005,
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15]
			},
		}
	},
	captain_rikoris: {
		name: 'Captain Rikoris',
		element: element.light,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.85,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			}
		}
	},
	carmainerose: {
		name: 'Carmainerose',
		element: element.fire,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	carrot: {
		name: 'Carrot',
		element: element.fire,
		classType: classType.mage,
		//form: [elements.target_burn_detonate],
		dot: [dot.burn],
		barrier: () => app.heroS.atk*0.6,
		barrierEnhance: 's2',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				detonate: dot.burn,
				detonation: () => 1,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.15, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15]
			}
		}
	},
	cartuja: {
		name: 'Cartuja',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.caster_max_hp, elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.06,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => (app.heroS.curHP < 50 ? 1 : 0.6) + (soulburn ? 0.2 : 0),
				pow: 1,
				flat: (soulburn) => {
					if (soulburn) {
						return app.heroS.hp * (app.heroS.curHP < 50 ? 0.1 : 0.08)
					} else {
						return app.heroS.hp * (app.heroS.curHP < 50 ? 0.0625 : 0.05)
					}
				},
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			}
		}
	},
	cecilia: {
		name: 'Cecilia',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0, 0.1, 0, 0.15],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.4,
				pow: 1,
				flat: () => app.heroS.hp*0.06,
				enhance: [0.05, 0, 0.1, 0, 0.15],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.6,
				pow: 1.5,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0, 0, 0, 0.15],
			}
		}
	},
	celeste: {
		name: 'Celeste',
		element: element.light,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.1 : 0.85,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
			},
		}
	},
	celestial_mercedes: {
		name: 'Celestial Mercedes',
		element: element.dark,
		classType: classType.mage,
		//form: [elements.target_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.9,
				pow: 0.9,
				flat: () => app.enemy.hp*0.04,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 0.8,
				enhance: [0.1, 0.1, 0, 0.15, 0.15],
			}
		}
	},
	cermia: {
		name: 'Cermia',
		element: element.fire,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.65 : 1.15,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
				penetrate: () => 0.5
			},
		}
	},
	challenger_dominiel: {
		name: 'Challenger Dominiel',
		element: element.dark,
		classType: classType.mage,
		//form: [elements.stack_crit_hit],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.5 : 1,
				pow: (soulburn) => soulburn ? 1 : 0.9,
				critDmgBoost: () => 0.2,
				flat: () => {
					let mult = 0;
					for (let i = 0; i < heroes.challenger_dominiel.skills.s2.mola; i++) {
						mult += heroes.challenger_dominiel.skills.s2.enhance[i];
					}
					//console.log(mult);
					return Number(app.heroS.atk * app.heroS.stackCritD*(0.054 + (0.054*mult)));
				},
				enhance: [0.05, 0.05, 0.05, 0.1, 0.15],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
			}
		}
	},
	champion_zerato: {
		name: 'Champion Zerato',
		element: element.dark,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	chaos_inquisitor: {
		name: 'Chaos Inquisitor',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.2 : 1.5,
				pow: 0.85,
				mult: () => 1 + (1-(app.heroS.curHP/100))/2, // 0.5% increased damage per 1% self Health missing
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.15]
			}
		}
	},
	chaos_sect_axe: {
		name: 'Chaos Sect Axe',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.target_hp_pc, elements.caster_max_hp],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.002,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1 : 0.8,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.005,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.9,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	charles: {
		name: 'Charles',
		element: element.earth,
		classType: classType.knight,
		//form: [elements.caster_nb_buff, elements.nb_targets, elements.exclusive_equipment_2],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => app.heroS.EE1 ? 1.1 : 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: () => 1.5 + (app.heroS.numBuffs > 1 ? (app.heroS.numBuffs-1)*0.07 : 0),
				pow: 1,
				enhance: [0.1, 0, 0.1, 0, 0.1],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 1,
				mult: () => {
					switch (app.enemy.numTargets) {
						case 3: return 1.534;
						case 2: return 1.801;
						case 1: return 2.068;
						default: return 1;
					}
				},
				enhance: [0.05, 0.05, 0, 0.1, 0.1],
			}
		}
	},
	charlotte: {
		name: 'Charlotte',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_nb_focus],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0.05, 0.1, 0, 0.15],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: () => {
					switch (app.heroS.focus_val) {
						case 2: return 1;
						case 3: return 1.3;
						case 4: return 1.7;
						case 5: return 2.4;
						default: return 0.8;
					}
				},
				pow: 0.8,
				enhance: [0.1, 0.1, 0, 0.1, 0.1],
			}
		}
	},
	chloe: {
		name: 'Chloe',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.target_magic_nailed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				mult: () => app.target.magicNail ? 1.3 : 1,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.9,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 3.5 : 2,
				pow: 0.8,
				mult: () =>  app.target.magicNail ? 1.35 : 1,
				enhance: [0.1, 0.1, 0, 0.15, 0.15],
			}
		}
	},
	church_of_ilryos_axe: {
		name: 'Church of Ilryos Axe',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.target_hp_pc],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.002,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: (soulburn) => soulburn ? 1 : 0.8,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.005,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	cidd: {
		name: 'Cidd',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: () => {
					let mult = 1.0;
					for (let i = 0; i < heroes.cidd.skills.s2.mola;  i++) {
						mult += heroes.cidd.skills.s2.enhance[i];
					}

					return 0.95*mult;
				},
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.2 : 1.6,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.0021,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	clarissa: {
		name: 'Clarissa',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.caster_enrage],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.05 : 0.8,
				pow: 1,
				mult: () => app.HeroS.enrage ? 1.3 : 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	coli: {
		name: 'Coli',
		element: element.ice,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.9,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 0.9,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.9,
				mult: () => 1 + app.heroS.spd*0.001125,
				enhance: [0.05, 0.1, 0, 0.1, 0.15]
			}
		}
	},
	commander_lorina: {
		name: 'Commander Lorina',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.target_hp_pc, elements.attack_skill_stack_5],
		atkUp: () => {
			let boost = 0.1;
			for (let i = 0; i < heroes.commander_lorina.skills.s2.mola; i++) {
				boost += heroes.commander_lorina.skills.s2.enhance[i];
			}
			
			return 1 + app.heroS.attackStack5*boost;
		},
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.005,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	corvus: {
		name: 'Corvus',
		element: element.fire,
		classType: classType.warrior,
		//form: [elements.caster_defense, elements.caster_enrage],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: () => app.heroS.enrage ? 0.9 : 0.7,
				pow: 1,
				flat: () => (app.heroS.enrage ? 1.2 : 0.9)*app.heroS.def,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.3,
				pow: 0.9,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	crescent_moon_rin: {
		name:	'Crescent Moon Rin',
		element: element.dark,
		classType: classType.thief,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.1,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.6,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	crimson_armin: {
		name: 'Crimson Armin',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 1,
				flat: () => app.heroS.def*0.6,
				enhance: [0.05, 0, 0.1, 0, 0, 0.15]
			}
		}
	},
	crozet: {
		name: 'Crozet',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_max_hp, elements.caster_defense],
		barrier: () => app.heroS.hp*0.15,
		barrierEnhance: 's2',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.6,
				pow: 1.05,
				flat: () => app.heroS.def*0.7,
				enhance: [0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 0.75 : 0.5,
				pow: 0.95,
				flat: () => app.heroS.def*0.6,
				enhance: [0.1, 0, 0, 0, 0.1, 0, 0.15]
			}
		}
	},
	dark_corvus: {
		name: 'Dark Corvus',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				noCrit: true,
				soulburn: true,
				rate: 0,
				pow: 0.95,
				flat: (soulburn) => app.heroS.hp*(soulburn ? 0.34 : 0.2),
				penetrate: () => 1.0,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	desert_jewel_basar: {
		name: 'Desert Jewel Basar',
		element: element.light,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1
			}
		}
	},
	destina: {
		name: 'Destina',
		element: element.earth,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
			}
		}
	},
	diene: {
		name: 'Diene',
		element: element.ice,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0, 0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	dingo: {
		name: 'Dingo',
		element: element.fire,
		classType: classType.warrior,
		dot: [dot.bleed, dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
			}
		}
	},
	dizzy: {
		name: 'Dizzy',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.target_has_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				mult: () => app.enemy.debuffs ? 1.3 : 1.0,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				onlyCrit: true,
				noCrit: true,
				rate: 2.5,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	dominiel: {
		name: 'Dominiel',
		element: element.ice,
		classType: classType.mage,
		barrier: () => Number(document.getElementById(`atk`).value),
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.75,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	doris: {
		name: 'Doris',
		element: element.light,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	eaton: {
		name: 'Eaton',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.25,
		barrierEnhance: 's3',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				enhance: [0.05, 0.1, 0, 0.1, 0.15]
			}
		}
	},
	elena: {
		name: 'Elena',
		element: element.ice,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0.15]
			}
		}
	},
	elson: {
		name: 'Elson',
		element: element.light,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	enott: {
		name: 'Enott',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.target_hp_pc],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => 1 + (100 - (app.enemy.curHP/app.enemy.hp))*0.005,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			}
		}
	},
	faithless_lidica: {
		name: 'Faithless Lidica',
		element: element.light,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.4,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			},
		}
	},
	falconer_kluri: {
		name: 'Falconer Kluri',
		element: element.earth,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 0.9,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
			}
		}
	},
	fallen_cecilia: {
		name: 'Fallen Cecilia',
		element: element.dark,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.1,
		barrierEnhance: 's2',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.65,
				pow: 0.95,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	fighter_maya: {
		name: 'Fighter Maya',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_defense, elements.target_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.def*0.75,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.7 : 1,
				pow: 1,
				flat: () => app.heroS.def*1.5,
				mult: () => app.enemy.curHP < 30 ? 3 : 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	furious: {
		name: 'Furious',
		element: element.ice,
		classType: classType.ranger,
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.95 : 1.65,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.1]
			}
		}
	},
	general_purrgis: {
		name: 'General Purrgis',
		element: element.light,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	gloomyrain: {
		name: 'Gloomyrain',
		element: element.light,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 0.95 : 0.7,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15, 0]
			}
		}
	},
	guider_aither: {
		name: 'Guider Aither',
		element: element.light,
		classType: classType.mage,
		barrier: () => app.heroS.atk,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.3 : 1.8,
				pow: 0.95,
				enhance: [0.1, 0, 0, 0.1, 0.15]
			}
		}
	},
	gunther: {
		name: 'Gunther',
		element: element.light,
		classType: classType.warrior,
		//form: [elements.target_has_bleed],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				noCrit: true,
				rate: 1,
				pow: 0.85,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				noCrit: true,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.9 : 2.2,
				pow: 0.85,
				mult: () => app.enemy.bleed ? 1.3 : 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	hataan: {
		name: 'Hataan',
		element: element.fire,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.95,
				pow: 0.95,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.3,
				pow: 0.85,
				mult: () => 1 + app.heroS.spd*0.00125,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1, 0.1]
			}
		}
	},
	haste: {
		name: 'Haste',
		element: element.fire,
		classType: classType.thief,
		//form: [elements.nb_targets],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2 : 1.5,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => {
					switch (app.enemy.numTargets) {
						case 1: return 2.5;
						case 2: return 2.0;
						default: return 1.0;
					}
				},
				enhance: [0.15, 0, 0, 0, 0.15]
			}
		}
	},
	hazel: {
		name: 'Hazel',
		element: element.fire,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			}
		}
	},
	helga: {
		name: 'Helga',
		element: element.earth,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			}
		}
	},
	hurado: {
		name: 'Hurado',
		element: element.dark,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	iseria: {
		name: 'Iseria',
		element: element.earth,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2 : 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 2,
				pow: 0.9,
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
			}
		}
	},
	jecht: {
		name: 'Jecht',
		element: element.earth,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	jena: {
		name: 'Jena',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.target_nb_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				mult: () => 1 + app.enemy.numDebuffs*0.1,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: (soulburn) => soulburn ? 1.1 : 0.85,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.15]
			}
		}
	},
	judge_kise: {
		name: 'Judge Kise',
		element: element.light,
		classType: classType.warrior,
		//form: [elements.nb_targets],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.15, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => 1 + (app.enemy.numTargets-1)*0.1,
				enhance: [0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0, 0.1, 0, 0, 0.1, 0.15]
			}
		}
	},
	judith: {
		name: 'Judith',
		element: element.fire,
		classType: classType.thief,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	karin: {
		name: 'Karin',
		element: element.ice,
		classType: classType.thief,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.1, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.3 : 1.6,
				pow: 0.85,
				critDmgBoost: () => 0.5,
				enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.1]
			}
		}
	},
	kayron: {
		name: 'Kayron',
		element: element.fire,
		classType: classType.thief,
		//form: [elements.caster_hp_pc, elements.exclusive_equipment_1, elements.exclusive_equipment_2],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.35 : 0.95,
				pow: 1,
				mult: () => 1 + (100-app.heroS.curHP)*0.0015 + (app.heroS.EE1 ? 0.1 : 0),
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.7,
				pow: 0.9,
				mult: () => 1 + (100-app.heroS.curHP)*0.003 + (app.heroS.EE2 ? 0.1 : 0),
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
			}
		}
	},
	ken: {
		name: 'Ken',
		element: element.fire,
		classType: classType.warrior,
		//form: [elements.caster_max_hp, elements.caster_vigor],
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.9,
				flat: () => app.heroS.hp*0.3,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
			}
		}
	},
	khawana: {
		name: 'Khawana',
		element: element.fire,
		classType: classType.thief,
		//form: [elements.target_has_debuff, elements.all_allies_fire],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				afterMath: () => app.enemy.debuffs ? { atkPercent: 0.6, penetrate: 0.7 } : null,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2 : 1.5,
				pow: 1,
				mult: (soulburn) => app.heroS.allFire ? (soulburn ? 1.25 : 1.35) : 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
		}
	},
	khawazu: {
		name: 'Khawazu',
		element: element.fire,
		classType: classType.warrior,
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	kikirat_v2: {
		name: 'Kikirat v2',
		element: element.light,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0, 0.05, 0, 0.05]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 0.5 : 0.4,
				pow: 1,
				flat: (soulburn) => app.heroS.def*(soulburn ? 0.6 : 0.5),
				enhance: [0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	kiris: {
		name: 'Kiris',
		element: element.earth,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.05, 0.05]
			}
		}
	},
	kise: {
		name: 'Kise',
		element: element.ice,
		classType: classType.thief,
		//form: [elements.target_has_buff, elements.caster_stealth, elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.4 : 1.1,
				pow: 1,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
				mult: () => app.enemy.buffs ? 1.7 : 1
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				penetrate: () => app.heroS.stealth ? 0.6 : 0,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.6,
				pow: 1,
				mult: () => 1 + app.heroS.curHP*0.0035,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	kitty_clarissa: {
		name: 'Kitty Clarissa',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 0.8,
				flat: () => app.heroS.hp*0.06,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1]

			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.05 : 0.8,
				pow: 0.95,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	kluri: {
		name: 'Kluri',
		element: element.earth,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 0.9,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.15]
			}
		}
	},
	krau: {
		name: 'Krau',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_max_hp, elements.caster_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => 0.085*app.heroS.hp,
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				flat: () => 0.13*app.heroS.hp,
				enhance: [0.05, 0, 0.05, 0, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				noCrit: true,
				rate: 0.3,
				pow: 1,
				flat: () => 0.53571*(app.heroS.hp-app.heroS.curHP),
				penetrate: () => 1.0,
			}
		}
	},
	lena: {
		name: 'Lena',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.target_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.15,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.2 : 1,
				pow: 1,
				mult: () => 1 + (100-app.enemy.curHP)*0.002,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
			},
		}
	},
	leo: {
		name: 'Leo',
		element: element.earth,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.35,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 0.8,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	lidica: {
		name: 'Lidica',
		element: element.fire,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.6,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	lilias: {
		name: 'Lilias',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_max_hp, elements.highest_ally_attack],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.95,
				flat: () => app.heroS.hp*0.12,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1,
				atk: () =>	elements.highest_ally_attack.value() * (elements.ally_atk_up.value() ? 1.5 : 1) * (elements.ally_atk_up_great.value() ? 1.75 : 1),
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1]
			}
		}
	},
	lilibet: {
		name: 'Lilibet',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.target_has_buff],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 1,
				mult: () => 1 + (app.enemy.buffs ? 0 : 0.2),
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.6 : 2,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	lorina: {
		name: 'Lorina',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.target_hp_pc, elements.attack_skill_stack_5],
		atkUp: () => {
			let boost = 0.1;
			for (let i = 0; i < heroes.lorina.skills.s2.mola; i++) {
				boost += heroes.lorina.skills.s2.enhance[i];
			}

			return 1 + app.heroS.attackStack5*boost;
		},
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.005, 0.005, 0.01, 0.01, 0.02]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.005,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	lots: {
		name: 'Lots',
		element: element.earth,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	ludwig: {
		name: 'Ludwig',
		element: element.earth,
		classType: classType.mage,
		//form: [elements.caster_invincible],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.65,
				pow: 1.05,
				enhance: [0.05, 0, 0, 0, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.1 : 0.85,
				pow: 0.95,
				penetrate: () => app.heroS.invicible ? 0.5 : 0.2,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	luluca: {
		name: 'Luluca',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.target_hp_pc, elements.s3_stack],
		barrier: () => app.heroS.atk*(1+app.heroS.s3Stack*0.2)*0.375,
		barrierEnhance: 's2',
		atkUp: () => 1 + elements.s3_stack.value()*0.2,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1',
				mola: 0,
				rate: 1,
				pow: 1,
				mult: () => 1 + (1-(app.enemy.curHP/100))*0.2,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.05, 0.05, 0, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			}
		}
	},
	luna: {
		name: 'Luna',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.caster_hp_above_50pc, elements.nb_hits],
		atkUp: () => {
			if ((app.heroS.curHP/app.heroS.hp) < .50) {
				return 1;
			}

			let mult = 1.2;
			for (let i = 0; i < heroes.luna.skills.s2.mola; i++) {
				mult += heroes.luna.skills.s2.enhance[i];
			}
			console.log("mult:"+mult);
			return mult;
		},
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: () => app.heroS.numHits*0.7,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.01, 0.02, 0.02, 0.02, 0.03]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.2 : 1.5,
				pow: 1.05,
				enhance: [0.05, 0, 0.1, 0, 0.1]
			}
		}
	},
	maid_chloe: {
		name: 'Maid Chloe',
		element: element.light,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			}
		}
	},
	martial_artist_ken: {
		name: 'Martial Artist Ken',
		element: element.dark,
		classType: classType.warrior,
		//form: [elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				onlyCrit: true,
				rate: 1.2,
				pow: 0.95,
				mult: () => 1 + (100-app.heroS.curHP)*0.004,
				enhance: [0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.1 : 0.9,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0, 0.15]
			}
		}
	},
	mascot_hazel: {
		name: 'Mascot Hazel',
		element: element.fire,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			}
		}
	},
	maya: {
		name: 'Maya',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_defense],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 0.95,
				flat: () => app.heroS.def*0.75,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				flat: () => app.heroS.def*0.8,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			}
		}
	},
	melissa: {
		name: 'Melissa',
		element: element.fire,
		classType: classType.mage,
		//form: [elements.caster_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.5 : 1,
				pow: 1.1,
				mult: () => 1 + (100-app.heroS.curHP)*0.0035,
				enhance: [0.05, 0, 0.05, 0, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	mercedes: {
		name: 'Mercedes',
		element: element.fire,
		classType: classType.mage,
		//form: [elements.nb_targets, elements.target_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 0.9 : 0.7,
				pow: 0.9,
				mult: () => {
					switch (app.enemy.numTargets) {
						case 1: return 1.9;
						case 2: return 1.6;
						default: return 1;
					}
				},
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 0.8,
				mult: () => 1 + (100-app.enemy.curHP)*0.003,
				enhance: [0.1, 0.1, 0, 0.15, 0.15]
			}
		}
	},
	mirsa: {
		name: 'Mirsa',
		element: element.light,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.1, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.5 : 1.8,
				pow: 0.85,
				mult: () => 1 + app.heroS.spd*0.0015,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.05]
			}
		}
	},
	mistychain: {
		name: 'Mistychain',
		element: element.ice,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.3,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.2 : 1.5,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	montmorancy: {
		name: 'Montmorancy',
		element: element.ice,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	mucacha: {
		name: 'Mucacha',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			}
		}
	},
	nemunas: {
		name: 'Nemunas',
		element: element.fire,
		classType: classType.ranger,
		//form: [elements.target_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.7 : 1,
				pow: 0.8,
				flat: (soulburn) => app.enemy.hp*(soulburn ? 0.085 : 0.05),
				enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.1, 0.15]
			}
		}
	},
	otillie: {
		name: 'Otillie',
		element: element.dark,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 1,
				enhance: [0.1, 0, 0, 0, 0.15]
			}
		}
	},
	pearlhorizon: {
		name: 'Pearlhorizon',
		element: element.earth,
		classType: classType.mage,
		//form: [elements.target_max_hp, elements.target_has_sleep],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.6,
				pow: 1,
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: (soulburn) => soulburn ? 2.2 : 1.5,
				pow: 0.9,
				flat: () => elements.target_has_sleep.value() ? app.enemy.hp*0.2 : 0,
				enhance: [0.05, 0.05, 0, 0.1, 0.1, 0.1]
			},
		}
	},
	purrgis: {
		name: 'Purrgis',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.1, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.05 : 0.8,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	pyllis: {
		name: 'Pyllis',
		element: element.dark,
		classType: classType.knight,
		//form: [elements.caster_defense],
		barrier: () => app.heroS.def*0.6,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => app.heroS.def*0.4,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.3,
				pow: 0.95,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	ras: {
		name: 'Ras',
		element: element.fire,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 1,
				flat: () => app.heroS.hp*0.04,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1,
				flat: () => app.heroS.hp*0.04,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
		}
	},
	ravi: {
		name: 'Ravi',
		element: element.fire,
		classType: classType.warrior,
		//form: [elements.caster_fighting_spirit],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.5 : 1,
				pow: 1,
				mult: () => 1 + Math.floor(elements.caster_fighting_spirit.value()/20)*0.15,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 0.95,
				mult: () => 1 + Math.floor(elements.caster_fighting_spirit.value()/20)*0.15,
				enhance: [0.05, 0.05, 0, 0.05, 0.05]
			}
		}
	},
	requiemroar: {
		name: 'Requiemroar',
		element: element.dark,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.7 : 1.8,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
		}
	},
	researcher_carrot: {
		name: 'Researcher Carrot',
		element: element.fire,
		classType: classType.mage,
		//form: [elements.target_burn_detonate, elements.skill_tree_completed],
		dot: [dot.burn],
		barrier: () => Number(document.getElementById(`atk`).value)*0.6,
		barrierEnhance: 's2',
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				pow: 0.95,
				rate: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
				detonate: dot.burn,
				detonation: () => 1,
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.15, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				pow: 1,
				rate: 1,
				enhance: [0.05, 0, 0, 0, 0.1, 0, 0.15],
				mult: () => elements.skill_tree_completed.value() ? 1.1 : 1
			}
		}
	},
	righteous_thief_roozid: {
		name: 'Righteous Thief Roozid',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.001125,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	rikoris: {
		name: 'Rikoris',
		element: element.light,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.6,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0, 0.1]
			}
		}
	},
	rima: {
		name: 'Rima',
		element: element.ice,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.8,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.3,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	rin: {
		name: 'Rin',
		element: element.earth,
		classType: classType.soul_weaver,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.7,
				pow: 0.9,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			}
		}
	},
	roaming_warrior_leo: {
		name: 'Roaming Warrior Leo',
		element: element.dark,
		classType: classType.ranger,
		//form: [elements.target_has_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => app.enemy.debuffs ? 1.1 : 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 1.1,
				enhance: [0.05, 0, 0, 0, 0.15]
			}
		}
	},
	romann: {
		name: 'Romann',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.target_has_buff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 0.85,
				mult: () => app.enemy.buffs ? 1.3 : 1,
				enhance: [0.05, 0.1, 0, 0.15, 0.15]
			},
		}
	},
	roozid: {
		name: 'Roozid',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.2,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.001125,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	rose: {
		name: 'Rose',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_defense],
		barrier: () => app.heroS.def,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.def*0.7,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			}
		}
	},
	ruele_of_light: {
		name: 'Ruele of Light',
		element: element.light,
		classType: classType.soul_weaver,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.2,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.81,
				pow: 0.95,
				flat: () => app.heroS.hp*0.07,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	sage_baal_and_sezan: {
		name: 'Sage Baal & Sezan',
		element: element.light,
		classType: classType.mage,
		//form: [elements.caster_max_hp, elements.caster_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.1,
				enhance: [0.05, 0, 0.05, 0, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.85,
				pow: 1.3,
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.2,
				pow: 1,
				flat: () => 0.3*(app.heroS.hp-elements.caster_hp.value()),
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	schuri: {
		name: 'Schuri',
		element: element.fire,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	shooting_star_achates: {
		name: 'Shooting Star Achates',
		element: element.dark,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.1, 0, 0, 0.1, 0.1]
			}
		}
	},
	seaside_bellona: {
		name: 'Seaside Bellona',
		element: element.ice,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1,
				enhance: [0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				critDmgBoost: () => 0.2,
				enhance: [0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	serila: {
		name: 'Serila',
		element: element.fire,
		classType: classType.mage,
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2 : 1.5,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			}
		}
	},
	sez: {
		name: 'Sez',
		element: element.ice,
		classType: classType.thief,
		//form: [elements.target_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				mult: () => 1 + (100-app.enemy.curHP)*0.002,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.5,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 3.2 : 1.8,
				pow: 0.95,
				mult: (soulburn) => 1 + (100-app.enemy.curHP)*(soulburn ? 0.007 : 0.003),
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	shadow_rose: {
		name: 'Shadow Rose',
		element: element.dark,
		classType: classType.knight,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.5,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.05 : 0.8,
				pow: 0.8,
				enhance: [0.1, 0.1, 0, 0.15, 0.15]
			},
		}
	},
	sigret: {
		name: 'Sigret',
		element: element.ice,
		classType: classType.warrior,
		//form: [elements.target_nb_debuff, elements.exclusive_equipment_1],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => elements.exclusive_equipment_1.value() ? 1.2 : 1.0,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.25,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.7,
				pow: 0.8,
				enhance: [0.1, 0.1, 0, 0.15, 0.15],
				penetrate: () => Math.min(0.3 + app.enemy.numDebuffs*0.1, 1.0)
			},
		}
	},
	silk: {
		name: 'Silk',
		element: element.earth,
		classType: classType.ranger,
		//form: [elements.caster_speed, elements.caster_nb_focus],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: () => elements.caster_nb_focus.value() >= 2 ? 1.25 : 0.9,
				pow: 0.9,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.85,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0.15]
			}
		}
	},
	silver_blade_aramintha: {
		name: 'Silver Blade Aramintha',
		element: element.light,
		classType: classType.mage,
		dot: [dot.burn],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.5,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.9,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			},
		}
	},
	sol: {
		name: 'Sol Badguy',
		element: element.fire,
		classType: classType.warrior,
		//form: [elements.target_has_buff, elements.target_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => app.enemy.buffs ? 1 : 1.2, // 20% increased damage if target has no buffs
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 1,
				flat: () => app.enemy.hp*0.04, // 4% target max Health
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.6,
				pow: 1,
				flat: () => app.enemy.hp*0.05, // 5% target max Health
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	specimen_sez: {
		name: 'Specimen Sez',
		element: element.light,
		classType: classType.thief,
		//form: [elements.target_is_stunned],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.05 : 0.8,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 1,
				penetrate: () => elements.target_is_stunned.value() ? 1.0 : 0.3,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			}
		}
	},
	specter_tenebria: {
		name: 'Specter Tenebria',
		element: element.dark,
		classType: classType.mage,
		//form: [elements.target_nb_debuff, elements.dead_people],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.05, 0.15],
				mult: () => 1 + Math.min(elements.dead_people.value(), 5)*0.07
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.95,
				mult: () => 1 + app.enemy.numDebuffs*0.2 + Math.min(elements.dead_people.value(), 5)*0.07,
				enhance: [0.05, 0.05, 0, 0, 0.1, 0.1]
			}
		}
	},
	surin: {
		name: 'Surin',
		element: element.fire,
		classType: classType.thief,
		//form: [elements.target_nb_bleed],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1.4,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.8,
				mult: () => elements.target_nb_bleed.value() > 0 ? 1.4 + (Math.min(elements.target_nb_bleed.value(), 5)-1)*0.15 : 1,
				enhance: [0.1, 0.1, 0, 0.15, 0.15]
			},
		}
	},
	sven: {
		name: 'Sven',
		element: element.dark,
		classType: classType.thief,
		//form: [elements.caster_hp_pc, elements.target_hp_pc],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s1_extra: { 
				dmg: 0,	mola: 0,
				name: 'S1 Extra Attack',
				rate: 0.7,
				pow: 1,
				enhance_from: 's1',
				mult: () => 1 + (100-app.heroS.curHP)*0.003,
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 0.8,
				mult: () => 1 + (100-app.heroS.curHP)*0.005 + (100-app.enemy.curHP)*0.0015,
				enhance: [0.05, 0.05, 0.1, 0, 0.1, 0.1, 0.1]
			}
		}
	},
	tamarinne: {
		name: 'Tamarinne',
		element: element.fire,
		classType: classType.soul_weaver,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.75,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.15]
			}
		}
	},
	taranor_guard: {
		name: 'Taranor Guard',
		element: element.ice,
		classType: classType.warrior,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 1,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	taranor_royal_guard: {
		name: 'Taranor Royal Guard',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 1,
				flat: () => app.heroS.hp*0.025,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2.3 : 1.5,
				pow: 0.95,
				flat: () => app.heroS.hp*0.05,
				enhance: [0.05, 0.05, 0, 0.1, 0.15]
			}
		}
	},
	tenebria: {
		name: 'Tenebria',
		element: element.fire,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.8,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.35 : 1.1,
				pow: 1.05,
				enhance: [0.05, 0, 0, 0.1, 0.15]
			}
		}
	},
	tieria: {
		name: 'Tieria',
		element: element.fire,
		classType: classType.warrior,
		//form: [elements.target_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1.05,
				enhance: [0.1, 0, 0.15, 0]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.8 : 1.2,
				pow: 0.9,
				flat: (soulburn) => app.enemy.hp * (soulburn ? 0.06 : 0.04),
				enhance: [0.05, 0.05, 0.05, 0, 0.05, 0.1, 0.1]
			},
		}
	},
	troublemaker_crozet: {
		name: 'Troublemaker Crozet',
		element: element.dark,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		barrier: () => app.heroS.hp*0.2,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.95,
				flat: () => app.heroS.hp*0.04,
				enhance: [0, 0.05, 0, 0.05, 0, 0.1, 0.15]
			}
		}

	},
	tywin: {
		name: 'Tywin',
		element: element.ice,
		classType: classType.knight,
		//form: [elements.caster_max_hp],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.8,
				pow: 0.95,
				flat: () => app.heroS.hp*0.04,
				enhance: [0.05, 0.05, 0, 0.1, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.5,
				pow: 0.95,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15]
			}
		}
	},
	vildred: {
		name: 'Vildred',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.caster_speed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.85,
				pow: 0.95,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.5,
				pow: 1,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.1 : 0.85,
				pow: 1,
				mult: (soulburn) => 1 + app.heroS.spd*(soulburn ? 0.0009 : 0.00075),
				enhance: [0.05, 0.05, 0, 0.1, 0.1]
			}
		}
	},
	violet: {
		name: 'Violet',
		element: element.earth,
		classType: classType.thief,
		//form: [elements.caster_nb_focus],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 0.9,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.5,
				pow: 0.9,
				mult: () => 1 + elements.caster_nb_focus.value()*0.15,
				enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1, 0.1]
			}
		}
	},
	vivian: {
		name: 'Vivian',
		element: element.earth,
		classType: classType.mage,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.2,
				pow: 1,
				enhance: [0.05, 0, 0.05, 0, 0.05, 0.05, 0.1]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 1.3 : 1.05,
				pow: 0.9,
				enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1]
			},
			s2_wave_2: {
				name: 'S2 Wave 2',
				rate: 0.55,
				pow: 0.9,
				enhance_from: 's2'
			},
			s2_wave_3: {
				name: 'S2 Wave 3',
				rate: 0.3,
				pow: 0.9,
				enhance_from: 's2'
			}
		}
	},
	wanda: {
		name: 'Wanda',
		element: element.dark,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.9,
				pow: 0.95,
				mult: () => app.enemy.target ? 1.35 : 1,
				enhance: [0.05, 0, 0, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.9,
				enhance: [0.05, 0.05, 0, 0, 0.15, 0.15]
			}
		}
	},
	wanderer_silk: {
		name: 'Wanderer Silk',
		element: element.light,
		classType: classType.ranger,
		//form: [elements.caster_speed],
		dot: [dot.bleed],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.1, 0, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 1,
				pow: 0.9,
				mult: () => 1 + app.heroS.spd*0.00075,
				enhance: [0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1.8,
				pow: 0.8,
				mult: () => 1 + app.heroS.spd*0.001125,
				enhance: [0.1, 0.1, 0, 0, 0.15]
			}
		}
	},
	watcher_schuri: {
		name: 'Watcher Schuri',
		element: element.light,
		classType: classType.ranger,
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.7,
				pow: 1.05,
				enhance: [0.1, 0, 0, 0, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.8,
				pow: 0.95,
				enhance: [0.05, 0.05, 0, 0.1, 0.15],
				penetrate: () => 1.0,
			}
		}
	},
	yufine: {
		name: 'Yufine',
		element: element.earth,
		classType: classType.warrior,
		//form: [elements.target_has_buff, elements.exclusive_equipment_2],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1,
				pow: 1,
				mult: () => app.heroS.EE2 ? 1.3 : 1.0,
				enhance: [0.05, 0.05, 0, 0.05, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				rate: 0.9,
				pow: 1,
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 2,
				pow: 0.95,
				mult: () => app.enemy.buffs ? 1.5 : 1.0,
				enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1]
			}
		}
	},
	yuna: {
		name: 'Yuna',
		element: element.ice,
		classType: classType.ranger,
		//form: [elements.caster_speed, elements.nb_targets, elements.exclusive_equipment_3],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 0.85 : 0.6,
				pow: 0.8,
				mult: () => {
					let mult = 1 + app.heroS.spd*0.00075;
					switch (app.enemy.numTargets) {
						case 2: mult += 0.4; break;
						case 1: mult += 0.6; break;
					}
					return mult;
				},
				enhance: [0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				onlyCrit: true,
				rate: 1.5,
				pow: 0.8,
				mult: () => {
					const base = app.heroS.EE3 ? 1.3 : 1;
					switch (app.enemy.numTargets) {
						case 2: return base + 0.4;
						case 1: return base + 0.6;
						default: return base;
					}
				},
				enhance: [0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1]
			}
		}
	},
	zeno: {
		name: 'Zeno',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.caster_max_hp, elements.non_attack_skill_stack_10],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.1,
				enhance: [0.05, 0, 0.1, 0, 0.15],
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				enhance: [0.005, 0.005, 0.005, 0.005, 0.01],
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 0.5,
				pow: 1,
				flat: () => app.heroS.hp*0.12,
				mult: () => {
					let extra = 0;
					for (let i = 0; i < heroes.zeno.skills.s2.mola; i++) {
						extra += heroes.zeno.skills.s2.enhance[i];
					}

					return 1 + nonAtkStack10*(0.05+extra)
				},
				enhance: [0.05, 0, 0.1, 0, 0.15],
			}
		}
	},
	zerato: {
		name: 'Zerato',
		element: element.ice,
		classType: classType.mage,
		//form: [elements.target_has_debuff],
		stats: {}, skills: {
			s1: { 
				dmg: 0,
				name: 'S1', mola: 0,
				rate: 1.05,
				pow: 1,
				enhance: [0.05, 0.1, 0, 0.15]
			},
			s2: { 
				dmg: 0,
				name: 'S2', mola: 0,
				soulburn: true,
				rate: (soulburn) => soulburn ? 2 : 1.5,
				pow: 0.95,
				mult: () => app.enemy.debuffs ? 1.3 : 1,
				enhance: [0.05, 0.05, 0.1, 0.15]
			},
			s3: { 
				dmg: 0,
				name: 'S3', mola: 0,
				rate: 1,
				pow: 1,
				enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.1]
			}
		}
	}
};

