function hideKLM(classname){
    var classToHide = document.getElementsByClassName(classname); //divsToHide is an array
    for(var i = 0; i < classToHide.length; i++){
        classToHide[i].style.visibility = "hidden";
        classToHide[i].style.display = "none";
    }
}

function calc_outletFriction(form) {
    var flowUnits = parseFloat(form.pipeFlowUnits.value);
    var diameterUnits = parseFloat(form.pipeDiameterUnits.value);
    var lengthUnits = parseFloat(form.pipeLengthUnits.value);
    var frictionUnits = parseFloat(form.pressureLossUnits.value);
    var diameter = parseFloat(form.pipeDiameter.value) / diameterUnits;
    var outlets = parseFloat(form.pipeOutlets.value);
    var length = parseFloat(form.pipeLength.value) / lengthUnits;
    var flow = parseFloat(form.pipeFlowRate.value) * flowUnits;
    var material = parseFloat(form.pipeMaterial.value);
    var precision = 1;
    var friction = 1 / 2.75;
    friction = friction + (1 / (2 * outlets));
    friction = friction + (Math.pow(.75, .5) / (6 * Math.pow(outlets, 2)));
    friction = friction * (length / 100);
    friction = Math.pow(diameter, -4.8655) * friction;
    friction = Math.pow(flow / material, 1.852) * friction;
    friction = 1050 * friction;
    friction = friction * frictionUnits;
    switch (frictionUnits) {
        case 1:
            precision = 3;
            break;
        case 6.8947625:
            precision = 2;
            break;
        case 2.306661407:
            precision = 3;
            break;
        case 0.068947573:
            precision = 4;
            break;
        default:
            precision = 4;
    }
    form.pressureLoss.value = friction.toFixed(precision);
}

function calc_outletSize(form) {
    var flowUnits = parseFloat(form.flowUnits.value);
    var frictionUnits = parseFloat(form.frictionUnits.value);
    var lengthUnits = parseFloat(form.lengthUnits.value);
    var diameterUnits = parseFloat(form.diameterUnits.value);
    var friction = parseFloat(form.friction.value) / frictionUnits;
    var outlets = parseFloat(form.outlets.value);
    var length = parseFloat(form.length.value) / lengthUnits;
    var flow = parseFloat(form.flow.value) * flowUnits;
    var material = parseFloat(form.material.value);
    var precision = 2;
    var flowPow = Math.pow(flow / material, 1.852);
    var diameter = 1 / 2.75;
    diameter = diameter + 1 / (2 * outlets);
    diameter = diameter + (Math.pow(.75, .5) / (6 * Math.pow(outlets, 2)));
    diameter = diameter * length / 100;
    diameter = diameter * 1050 * flowPow;
    diameter = friction / diameter;
    diameter = Math.pow(diameter, (-1 / 4.87));
    diameter = diameter * diameterUnits;
    form.diameter.value = diameter.toFixed(precision);
}

function calc_reqFlowRate(form) {
    var useRateUnits = parseFloat(form.useRateUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var maxFlowRateUnits = parseFloat(form.maxFlowRateUnits.value);
    var useRate = parseFloat(form.useRate.value) * useRateUnits;
    var area = parseFloat(form.area.value) / areaUnits;
    var efficiency = parseFloat(form.efficiency.value);
    var precision = 2;
    var maxFlowRate = (area * useRate * 452.57) / 24;
    maxFlowRate = (maxFlowRate / efficiency) * 100;
    maxFlowRate = maxFlowRate / maxFlowRateUnits;
    switch (maxFlowRateUnits) {
        case 1:
            precision = 0;
            break;
        case .016666666666667:
            precision = 0;
            break;
        case .000694444:
            precision = -1;
            break;
        case 694.444444444:
            precision = 4;
            break;
        case 448.7311688:
            precision = 3;
            break;
        case 18.85714286:
            precision = 1;
            break;
        case 452.5714286:
            precision = 2;
            break;
        case 226.2857143:
            precision = 2;
            break;
        case 15.85032314:
            precision = 0;
            break;
        case .264172051:
            precision = 0;
            break;
        case 15850.32314:
            precision = 5;
            break;
        case 4.402867521:
            precision = 0;
            break;
        default:
            precision = 2;
    }
    form.maxFlowRate.value = maxFlowRate.toFixed(precision);
}

function calc_SysCap(form) {
    FlowRateUnits = parseFloat(form.FlowRateUnits.value);
    Area1Units = parseFloat(form.Area1Units.value);
    efficiencyUnits = parseFloat(form.efficiencyUnits.value);
    sysCapUnits = parseFloat(form.sysCapUnits.value);
    FlowRate = parseFloat(form.FlowRate.value) * FlowRateUnits;
    Area1 = parseFloat(form.Area1.value) * Area1Units;
    efficiency = parseFloat(form.efficiency.value);
    if (parseInt(form.efficiencyUnits.value) == 0) {
        efficiency = efficiency / 100;
    }
    SysCap = FlowRate / Area1 / area1Units;
    switch (sysCapacityUnits) {
        case 1:
            precision = 0;
            break;
        case 448.8311688:
            precision = 2;
            break;
        case 15.850323074:
            precision = 1;
            break;
        default:
            precision = 0;
    };
    SysCap = SysCap.toFixed(precision);
    form.SysCap.value = SysCap;
}

function calc_waterDepth(form) {
    var flowRateUnits = parseFloat(form.flowRateUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var timeUnits = parseFloat(form.timeUnits.value);
    var waterDepthUnits = parseFloat(form.waterDepthUnits.value);
    var flowRate = parseFloat(form.flowRate.value) * flowRateUnits;
    var area = parseFloat(form.area.value) / areaUnits;
    var time = parseFloat(form.time.value) / timeUnits;
    var efficiency = parseFloat(form.efficiency.value) / 100;
    var precision = 2;
    var waterDepth = (flowRate * time) / (452.57 * area);
    waterDepth = waterDepth * efficiency * waterDepthUnits;
    switch (waterDepthUnits) {
        case 1:
            precision = 2;
            break;
        case 0.0833333333:
            precision = 3;
            break;
        case 25.4:
            precision = 0;
            break;
        case 2.54:
            precision = 1;
            break;
        case .0254:
            precision = 3;
            break;
        default:
            precision = 2;
    }
    waterDepth = waterDepth.toFixed(precision);
    form.waterDepth.value = waterDepth;
}

function calc_applicationRate(form) {
    var flowRateUnits = parseFloat(form.flowRateUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var applicationRateUnits = parseFloat(form.applicationRateUnits.value);
    var flowRate = parseFloat(form.flowRate.value) * flowRateUnits;
    var area = parseFloat(form.area.value) / areaUnits;
    var precision = 2;
    var applicationRate = flowRate / area;
    applicationRate = applicationRate / 452.57;
    applicationRate = applicationRate * applicationRateUnits;
    switch (applicationRateUnits) {
        case 1:
            precision = 4;
            break;
        case 24:
            precision = 3;
            break;
        case 25.4:
            precision = 3;
            break;
        case 609.6:
            precision = 2;
            break;
        case 2.54:
            precision = 4;
            break;
        case 60.96:
            precision = 3;
            break;
        default:
            precision = 2;
    }
    form.applicationRate.value = applicationRate.toFixed(precision);
}

function calc_pipefriction(form) {
    var pfFlowUnits = parseFloat(form.flowUnits.value);
    var pfDiameterUnits = parseFloat(form.diameterUnits.value);
    var pfLengthUnits = parseFloat(form.lengthUnits.value);
    var pfPressLossUnits = parseFloat(form.pressureLossUnits.value);
    var pfFlow = parseFloat(form.flow.value) * pfFlowUnits;
    var pfDiameter = parseFloat(form.diameter.value) * pfDiameterUnits;
    var pfLength = parseFloat(form.length.value) * pfLengthUnits;
    var pfMaterial = parseFloat(form.material.value);
    var precision = 2;
    var pressureLoss = pfLength / 100;
    pressureLoss = pressureLoss * 455.2;
    pressureLoss = pressureLoss * Math.pow((pfFlow / pfMaterial), 1.852);
    pressureLoss = pressureLoss * Math.pow((pfDiameter / 2.54), -4.8655);
    pressureLoss = pressureLoss * pfPressLossUnits;
    switch (pfPressLossUnits) {
        case 1:
            precision = 1;
            break;
        case 6.8947625:
            precision = 0;
            break;
        case 2.306661407:
            precision = 1;
            break;
        case 0.068947573:
            precision = 2;
            break;
        case .70309:
            precision = 2;
            break;
        default:
            precision = 2;
    }
    form.pressureLoss.value = pressureLoss.toFixed(precision);
}

function calc_minPipeSize(form) {
    var psMaxPressureUnits = parseFloat(form.maxPressureUnits.value);
    var psFlowUnits = parseFloat(form.flowUnits.value);
    var psLengthUnits = parseFloat(form.lengthUnits.value);
    var psMinPipeSizeUnits = parseFloat(form.minPipeSizeUnits.value);
    var psFlow = parseFloat(form.flow.value) * psFlowUnits;
    var psLength = parseFloat(form.length.value) / psLengthUnits;
    var psMaterial = parseFloat(form.material.value);
    var psMaxPressure = parseFloat(form.maxPressure.value) / psMaxPressureUnits;
    var precision = 2;
    var minPipeSize = Math.pow((psFlow / psMaterial), 1.852);
    minPipeSize = 455.2 * (psLength / 100) * minPipeSize;
    minPipeSize = psMaxPressure / minPipeSize;
    minPipeSize = Math.pow(minPipeSize, (-1 / 4.8655));
    minPipeSize = minPipeSize * psMinPipeSizeUnits;
    switch (psMinPipeSizeUnits) {
        case 1:
            precision = 1;
            break;
        case 0.0833333:
            precision = 2;
            break;
        case 0.0254:
            precision = 2;
            break;
        case 2.54:
            precision = 1;
            break;
        case 25.4:
            precision = 0;
            break;
        default:
            precision = 2;
    }
    form.minPipeSize.value = minPipeSize.toFixed(precision);
}

function calc_horsepower(form) {
    var pressureUnits = parseFloat(form.pressureUnits.value);
    var flowRateUnits = parseFloat(form.flowRateUnits.value);
    var powerUnits = parseFloat(form.powerUnits.value);
    var brakeUnits = parseFloat(form.brakeUnits.value);
    var pressure = parseFloat(form.pressure.value) / pressureUnits;
    var flowRate = parseFloat(form.flowRate.value) * flowRateUnits;
    var pumpEffic = parseFloat(form.pumpEffic.value) / 100;
    var driveMotorEffic = parseFloat(form.driveMotorEffic.value) / 100;
    var tmpResult = (flowRate * pressure) / (1716.8 * pumpEffic);
    var precision = 2;
    switch (brakeUnits) {
        case 1:
            precision1 = 2;
            break;
        case 1.34048257:
            precision1 = 2;
            break;
        default:
            precision1 = 2;
    }
    var brakeHP = tmpResult / brakeUnits;
    form.brakeHP.value = brakeHP.toFixed(precision1);
    switch (powerUnits) {
        case 1:
            precision2 = 2;
            break;
        case 1.34048257:
            precision2 = 2;
            break;
        default:
            precision2 = 2;
    }
    var powerReq = parseFloat(tmpResult / driveMotorEffic);
    powerReq = powerReq / powerUnits;
    form.powerReq.value = powerReq.toFixed(precision2);
}

function calc_IrrigCostsU(form) {
    var costUnits = parseFloat(form.costUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var depthUnits = parseFloat(form.depthUnits.value);
    var cost = parseFloat(form.cost.value) * costUnits;
    var area = parseFloat(form.area.value) * areaUnits;
    var depth = parseFloat(form.depth.value) * depthUnits;
    var appEffic = parseFloat(form.appEffic.value);
    var tmpResult = cost * area * depth / (appEffic * 16.0417);
    form.WaterCostU.value = tmpResult.toFixed(2);
}

function calc_PivMvmntCost(form) {
    var motorSizeUnits = parseFloat(form.motorSizeUnits.value);
    var motorSize = parseFloat(form.motorSize.value) * motorSizeUnits;
    var NumTwrs = parseFloat(form.NumTwrs.value);
    var PvtPcntSet = parseFloat(form.PvtPcntSet.value) / 100;
    var OpHrs = parseFloat(form.OpHrs.value);
    var CostPrkWh = parseFloat(form.CostPrkWh.value);
    var EndTwrHrs = OpHrs * PvtPcntSet;
    var TotMotorHrs = 0.5 * EndTwrHrs * (NumTwrs + 1);
    var tmpResult = CostPrkWh * motorSize * TotMotorHrs / (1.341 * 0.78);
    form.PivMvmntCosts.value = tmpResult.toFixed(2);
}

function calc_IrrigCostsP(form) {
    var costPUnits = parseFloat(form.costPUnits.value);
    var liftUnits = parseFloat(form.liftUnits.value);
    var pressureUnits = parseFloat(form.pressureUnits.value);
    var areaPUnits = parseFloat(form.areaPUnits.value);
    var depthPUnits = parseFloat(form.depthPUnits.value);
    var cost = parseFloat(form.costP.value) / costPUnits;
    var lift = parseFloat(form.lift.value) * liftUnits;
    var pressure = parseFloat(form.pressure.value) * pressureUnits;
    var area = parseFloat(form.areaP.value) * areaPUnits;
    var depth = parseFloat(form.depthP.value) * depthPUnits;
    var Ea = parseFloat(form.appEffic.value) / 100;
    var Ep = parseFloat(form.pumpEff.value) / 100;
    var Em = parseFloat(form.motorEff.value) / 100;
    pressure = pressure + lift / 2.3067;
    var tmpResult = pressure * area * depth * cost / (1.411 * Ea * Em * Ep);
    form.WaterCostPump.value = tmpResult.toFixed(2);
}

// Velocity FPS
function calc_waterVelocity(form) {
    var flowRate = parseFloat(form.flowRate.value);
    var diameter = parseFloat(form.diameter.value);
    const constant = 0.408;

    var waterVelocity = (constant * flowRate) / Math.pow(diameter, 2);
    
    if(waterVelocity === 8.16) {
        waterVelocity = Math.round(waterVelocity)
    } 

    form.waterVelocity.value = waterVelocity.toFixed(2);
}

function calc_pipeDiameter(form) {
    var pipeFlowRateUnits = parseFloat(form.pipeFlowRateUnits.value);
    var pipeDiameterUnits = parseFloat(form.pipeDiameterUnits.value);
    var pipeFlowRate = parseFloat(form.pipeFlowRate.value) * pipeFlowRateUnits;
    var precision = 2;
    var pipeDiameter = Math.sqrt(pipeFlowRate);
    pipeDiameter = 0.28583 * pipeDiameter * pipeDiameterUnits;
    switch (pipeDiameterUnits) {
        case 0.0833333333:
            precision = 2;
            break;
        case 1:
            precision = 1;
            break;
        case 25.4:
            precision = 0;
            break;
        case 2.54:
            precision = 1;
            break;
        case .0254:
            precision = 2;
            break;
        default:
            precision = 1;
    }
    form.pipeDiameter.value = pipeDiameter.toFixed(precision);
}

function calc_setTime(form) {
    var flowUnits = parseFloat(form.flowUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var appUnits = parseFloat(form.appUnits.value);
    var setTimeUnits = parseFloat(form.setTimeUnits.value);
    var app = parseFloat(form.app.value) * appUnits;
    var area = parseFloat(form.area.value) / areaUnits;
    var flow = parseFloat(form.flow.value) * flowUnits;
    var efficiency = parseFloat(form.efficiency.value) / 100;
    var setTime = app * area * 43560;
    setTime = setTime / (96.3 * flow * efficiency);
    setTime = setTime / setTimeUnits;
    var precision = 2;
    switch (setTimeUnits) {
        case 1:
            precision = 1;
            break;
        case .0166666666666666:
            precision = 0;
            break;
        default:
            precision = 2;
            break;
    }
    form.setTime.value = setTime.toFixed(precision);
}

function calc_systemCapacity(form) {
    var areaUnits = parseFloat(form.areaUnits.value);
    var depthUnits = parseFloat(form.depthUnits.value);
    var intervalUnits = parseFloat(form.intervalUnits.value);
    var timeUnits = parseFloat(form.timeUnits.value);
    var systemCapUnits = parseFloat(form.systemCapUnits.value);
    var area = parseFloat(form.area.value) / areaUnits;
    var depth = parseFloat(form.depth.value) / depthUnits;
    var interval = parseFloat(form.interval.value) * intervalUnits;
    var time = parseFloat(form.time.value) * timeUnits;
    var efficiency = parseFloat(form.efficiency.value) / 100;
    var precision = 2;
    var result = 453 * area * depth;
    result = result / (interval * time * efficiency);
    result = parseFloat(result / systemCapUnits);
    switch (systemCapUnits) {
        case 1:
            precision = 0;
            break;
        case 448.8311688:
            precision = 3;
            break;
        case 18.85714286:
            precision = 1;
            break;
        case 452.5714286:
            precision = 2;
            break;
        case 226.2857143:
            precision = 2;
            break;
        case 15.850323074:
            precision = 0;
            break;
        case .264172051:
            precision = 0;
            break;
        case 15850.32314:
            precision = 5;
            break;
        default:
            precision = 2;
    }
    form.systemCapacity.value = result.toFixed(precision);
}

function clearText(thefield) {
    if (thefield.defaultValue == thefield.value)
        thefield.value = "";
}

function calc_trapezoidalArea(form) {
    var widthUnits = parseFloat(form.widthUnits.value);
    var length1Units = parseFloat(form.length1Units.value);
    var length2Units = parseFloat(form.length2Units.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var width = parseFloat(form.width.value) / widthUnits;
    var length1 = parseFloat(form.length1.value) / length1Units;
    var length2 = parseFloat(form.length2.value) / length2Units;
    var precision = 2;
    var area = length2 + length1;
    area = area / 2;
    area = area * width;
    area = area / 43560;
    area = area * areaUnits;
    area = Math.round(area * 100) / 100;
    form.area.value = area.toFixed(precision);
}

function calc_rectangularArea(form) {
    var widthUnits = parseFloat(form.widthRUnits.value);
    var lengthUnits = parseFloat(form.lengthRUnits.value);
    var areaUnits = parseFloat(form.areaRUnits.value);
    var lengthR = parseFloat(form.lengthR.value);
    var widthR = parseFloat(form.widthR.value);
    var lengthR = lengthR * lengthUnits;
    var widthR = widthR * widthUnits;
    var precision = 2;
    var area = lengthR * widthR;
    area = area / (areaUnits);
    form.areaR.value = area.toFixed(precision);
}

function calc_triangularArea(form) {
    var baseUnits = parseFloat(form.baseUnits.value);
    var heightUnits = parseFloat(form.heightUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var height = parseFloat(form.height.value) * heightUnits;
    var base = parseFloat(form.base.value) * baseUnits;
    var precision = 2;
    var area = base * height;
    area = area / 2;
    area = area / areaUnits;
    form.area.value = area.toFixed(precision);
}

function calc_circularArea(form) {
    var radiusUnits = parseFloat(form.radiusUnits.value);
    var circleUnits = parseFloat(form.circleUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var radius = parseFloat(form.radius.value) / radiusUnits;
    var circle = parseFloat(form.circle.value);
    var precision = 2;
    switch (circleUnits) {
        case 0:
            break;
        case 1:
            circle = circle * 3.6;
            break;
        case 2:
            circle = circle * 360;
            break;
        default:
    }
    var area = Math.PI * Math.pow(radius, 2);
    area = area * circle;
    area = area / 360;
    area = area / 43560;
    area = area * areaUnits;
    form.area.value = area.toFixed(precision);
}

function calc_totalDynamicHead(form) {
    var elevationUnits = parseFloat(form.elevationUnits.value);
    var headPressureUnits = parseFloat(form.headPressureUnits.value);
    var frictionUnits = parseFloat(form.frictionUnits.value);
    var existingPressureUnits = parseFloat(form.existingPressureUnits.value);
    var totalHeadPressureUnits = parseFloat(form.totalHeadPressureUnits.value);
    var totalDynamicHeadUnits = parseFloat(form.totalDynamicHeadUnits.value);
    var elevationChange = parseFloat(form.elevationChange.value) / elevationUnits;
    var headPressure = parseFloat(form.headPressure.value) * headPressureUnits;
    var frictionLoss = parseFloat(form.frictionLoss.value) * frictionUnits;
    var existingPressure = parseFloat(form.existingPressure.value) * existingPressureUnits;
    var precision1 = 2;
    var totalHeadPressure = elevationChange / 2.31;
    totalHeadPressure = totalHeadPressure + headPressure + frictionLoss;
    switch (totalHeadPressureUnits) {
        case .433528:
            precision1 = 1;
            break;
        case 1.422336:
            precision1 = 1;
            break;
        case 14.503773773:
            precision1 = 2;
            break;
        case .145038:
            precision1 = 0;
            break;
        case 14.695949:
            precision1 = 2;
            break;
        case .491154:
            precision1 = 1;
            break;
        case 1:
            precision1 = 1;
            break;
        default:
            precision1 = 2;
    }
    form.totalHeadPressure.value = (totalHeadPressure * totalHeadPressureUnits).toFixed(precision1);
    var totalDynamicHead = totalHeadPressure - existingPressure;
    var precision2 = 2;
    totalDynamicHead = totalDynamicHead / totalDynamicHeadUnits;
    switch (totalDynamicHeadUnits) {
        case .433528:
            precision2 = 1;
            break;
        case 1.422336:
            precision2 = 1;
            break;
        case 14.503773773:
            precision2 = 2;
            break;
        case .145038:
            precision2 = 0;
            break;
        case 14.695949:
            precision2 = 2;
            break;
        case .491154:
            precision2 = 1;
            break;
        case 1:
            precision2 = 1;
            break;
        default:
            precision2 = 2;
    }
    form.totalDynamicHead.value = totalDynamicHead.toFixed(precision2);
}

function calc_irrigatableArea(form) {
    var supplyUnits = parseFloat(form.supplyUnits.value);
    var waterNeedsUnits = parseFloat(form.waterNeedsUnits.value);
    var timeUnits = parseFloat(form.timeUnits.value);
    var irrigatedAreaUnits = parseFloat(form.irrigatedAreaUnits.value);
    var supply = parseFloat(form.supply.value) * supplyUnits;
    var waterNeeds = parseFloat(form.waterNeeds.value) * waterNeedsUnits;
    var operationHours = parseFloat(form.operationHours.value) * timeUnits;
    var sysEfficiency = parseFloat(form.sysEfficiency.value);
    if (form.sysEfficiencyUnits.value == 0) {
        sysEfficiency = parseFloat(form.sysEfficiency.value) / 100;
    }
    var irrigatedArea = 96.25 * supply * operationHours * sysEfficiency;
    irrigatedArea = irrigatedArea / waterNeeds;
    irrigatedArea = irrigatedArea / 43560;
    irrigatedArea = irrigatedArea * irrigatedAreaUnits;
    var precision = 2;
    switch (irrigatedAreaUnits) {
        case 1:
            precision = 1;
            break;
        case 43560:
            precision = -1;
            break;
        case .404685658:
            precision = 2;
            break;
        case 4046.856579:
            precision = 0;
            break;
        case 4840:
            precision = 0;
            break;
        case 0.004046856422:
            precision = 2;
            break;
        case 0.0015625:
            precision = 3;
            break;
        default:
            precision = 2;
    }
    form.irrigatedArea.value = irrigatedArea.toFixed(precision);
}

function calc_irrigRunTime(form) {
    var wateringFreqUnits = parseFloat(form.wateringFreqUnits.value);
    var refETUnits = parseFloat(form.refETUnits.value);
    var appRateUnits = parseFloat(form.appRateUnits.value);
    var runTimeUnits = parseFloat(form.runTimeUnits.value);
    var wateringFreq = parseFloat(form.wateringFreq.value) / wateringFreqUnits;
    var refET = parseFloat(form.refET.value) * refETUnits;
    var cropCoefficient = 1;
    var appRate = parseFloat(form.appRate.value) / appRateUnits;
    if (form.efficiencyUnits.value == 0) {
        efficiency = parseFloat(form.efficiency.value) / 100;
    } else {
        efficiency = parseFloat(form.efficiency.value);
    }
    var runTime = 60 * wateringFreq * refET * cropCoefficient;
    runTime = runTime / (appRate * efficiency);
    runTime = runTime * runTimeUnits;
    switch (runTimeUnits) {
        case 1:
            precision = 0;
            break;
        case 0.0166666667:
            precision = 2;
            break;
        case 0.000694444444:
            precision = 3;
            break;
        default:
            precision = 2;
    }
    form.runTime.value = runTime.toFixed(precision);
}

function calc_irrigFrequency(form) {
    var AWHCUnits = parseFloat(form.AWHCUnits.value);
    var RZUnits = parseFloat(form.RZUnits.value);
    var EtoUnits = parseFloat(form.EtoUnits.value);
    var frequencyUnits = parseFloat(form.frequencyUnits.value);
    var AWHC = parseFloat(form.AWHC.value);
    var RZ = parseFloat(form.RZ.value) / RZUnits;
    var MAD = parseFloat(form.MAD.value);
    var Eto = parseFloat(form.Eto.value) * EtoUnits;
    var Kc = 1;
    switch (AWHCUnits) {
        case 0:
            break;
        case 1:
            AWHC = AWHC / 100;
            break;
        case 2:
        case 3:
        case 4:
        default:
            AWHC = AWHC / 0.0833333333;
    }
    var frequencyActual = AWHC * RZ * MAD;
    frequencyActual = frequencyActual / (Eto * Kc);
    frequencyActual = frequencyActual * frequencyUnits;
    frequency = frequencyActual;
    var precision = 2;
    switch (frequencyUnits) {
        case 1:
            precision = 1;
            break;
        case 24:
            precision = 1;
            break;
        default:
            precision = 2;
    }
    form.frequency.value = frequency.toFixed(precision);
}

function calc_convertNozzleSizes(form) {
    var decimalofInch = parseFloat(form.decimalofInch.value);
    var convertSize = parseInt(form.convertSize.value);
    var result = 0;
    switch (convertSize) {
        case 0:
            convertedValue = decimalOfInch * 25.4;
            break;
        case 1:
            convertedValue = Math.round(decimalOfInch * 128);
            break;
        case 2:
            convertedValue = Math.round(decimalOfInch * 64);
            break;
        case 3:
            size_128 = Math.round(decimalOfInch * 128);
            break;
        case 4:
            size_64 = Math.round(decimalOfInch * 64);
            break;
        case 5:
            size_32 = Math.round(decimalOfInch * 32);
            break;
        case 6:
            size_16 = Math.round(decimalOfInch * 16);
            break;
        case 7:
            size_8 = Math.round(decimalOfInch * 8);
            break;
        default:
            break;
    }
}

function calc_NPSHA(form) {
    var elevationUnits = parseFloat(form.elevationUnits.value);
    var frictionUnits = parseFloat(form.frictionUnits.value);
    var vHeightUnits = parseFloat(form.vHeightUnits.value);
    var NPSHAUnits = parseFloat(form.NPSHAUnits.value);
    var elevation = parseFloat(form.elevation.value) * elevationUnits;
    var friction = parseFloat(form.friction.value) * frictionUnits;
    var vHeight = parseFloat(form.vHeight.value) * vHeightUnits;
    var precision = 2;
    var pressure = elevation / 504.74;
    pressure = 293 - pressure;
    pressure = pressure / 293;
    pressure = Math.pow(pressure, 5.26);
    pressure = 33.89 * pressure;
    form.atPressure.value = pressure.toFixed(precision);
    var NPSHA = pressure - friction - vHeight;
    NPSHA = NPSHA / NPSHAUnits;
    switch (NPSHAUnits) {
        case 1:
            precision = 1;
            break;
        case 3.277627268378464:
            precision = 1;
            break;
        case 33.4552563312969:
            precision = 2;
            break;
        case 0.334552563312969:
            precision = 0;
            break;
        case 2.306658627770039:
            precision = 1;
            break;
        default:
            precision = 2;
    }
    form.NPSHA.value = NPSHA.toFixed(precision);
}

function calc_waterHammer(form) {
    var opPressureUnits = parseFloat(form.opPressureUnits.value);
    var velocityUnits = parseFloat(form.velocityUnits.value);
    var lengthUnits = parseFloat(form.lengthUnits.value);
    var devPressureUnits = parseFloat(form.devPressureUnits.value);
    var opPressure = parseFloat(form.opPressure.value) * opPressureUnits;
    var velocity = parseFloat(form.velocity.value) / velocityUnits;
    var length = parseFloat(form.length.value) / lengthUnits;
    var time = parseFloat(form.time.value);
    var precision = 2;
    var devPressure = opPressure + velocity * length * 0.07 / time;
    devPressure = devPressure / devPressureUnits;
    switch (devPressureUnits) {
        case .433528:
            precision = 1;
            break;
        case 1.422336:
            precision = 1;
            break;
        case 14.503773773:
            precision = 1;
            break;
        case .145038:
            precision = 0;
            break;
        case 1:
            precision = 0;
            break;
        default:
            precision = 2;
    }
    form.devPressure.value = devPressure.toFixed(precision);
}

function calc_waterSupply(form) {
    var waterRateUnits = parseFloat(form.waterRateUnits.value);
    var timeUnits = parseFloat(form.timeUnits.value);
    var supplyUnits = parseFloat(form.supplyUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var sysCapacityUnits = parseFloat(form.sysCapacityUnits.value);
    var waterRate = parseFloat(form.waterRate.value) * waterRateUnits;
    var opTime = parseFloat(form.opTime.value) * timeUnits;
    var efficiency = parseFloat(form.efficiency.value);
    if (parseInt(form.efficiencyUnits.value) == 0) {
        efficiency = efficiency / 100;
    }
    var minSupplyReqs = waterRate * 15.08556;
    minSupplyReqs = minSupplyReqs / opTime;
    minSupplyReqs = minSupplyReqs / efficiency;
    minSupplyReqs = minSupplyReqs / supplyUnits;
    var precision1 = 2;
    switch (supplyUnits) {
        case 1:
            precision1 = 0;
            break;
        case 6.41702599873:
            precision1 = 2;
            break;
        case 448.8311688:
            precision1 = 1;
            break;
        default:
    };
    form.minSupplyReqs.value = minSupplyReqs.toFixed(precision1);
    var area = parseFloat(form.area.value) / areaUnits;
    var sysCapacity = minSupplyReqs * area;
    sysCapacity = sysCapacity / sysCapacityUnits;
    var precision2 = 2;
    switch (sysCapacityUnits) {
        case 1:
            precision2 = 0;
            break;
        case 448.8311688:
            precision2 = 2;
            break;
        case 15.850323074:
            precision2 = 1;
            break;
        default:
            precision2 = 0;
    };
    sysCapacity = sysCapacity.toFixed(precision2);
    form.sysCapacity.value = sysCapacity;
}

function calc_rectangleSprinklerDensity(form) {
    var lateralSpacingUnits = parseFloat(form.lateralSpacingUnits.value);
    var lineSpacingUnits = parseFloat(form.lineSpacingUnits.value);
    var headDensityUnits = parseFloat(form.headDensityUnits.value);
    var lateralSpacing = parseFloat(form.lateralSpacing.value) * lateralSpacingUnits;
    var lineSpacing = parseFloat(form.lineSpacing.value) * lineSpacingUnits;
    var headDensity = 43560 / lineSpacing;
    headDensity = headDensity / lateralSpacing;
    headDensity = headDensity * headDensityUnits;
    var precision = 2;
    switch (headDensityUnits) {
        case 1:
        case 2.47105371844:
        default:
            precision = 2;
    }
    form.headDensity.value = headDensity.toFixed(precision);
}

function calc_triangleSprinklerDensity(form) {
    var lineSpacingUnits = parseFloat(form.lineSpacingUnits.value);
    var headDensityUnits = parseFloat(form.headDensityUnits.value);
    var lineSpacing = parseFloat(form.lineSpacing.value);
    var headDensity = 0.866 * Math.pow(lineSpacing, 2);
    headDensity = 43560 / headDensity;
    headDensity = headDensity * headDensityUnits;
    var precision = 2;
    switch (headDensityUnits) {
        case 1:
        case 2.47105371844:
        default:
            precision = 2;
    }
    form.headDensity.value = headDensity.toFixed(precision);
}

function show_id(form) {
    var pipeMaterial = parseInt(form.pipeMaterial.value);
    switch (pipeMaterial) {
        case 0:
            document.getElementById("pvc").style.display = "block";
            document.getElementById("steel").style.display = "none";
            document.getElementById("castIron").style.display = "none";
            document.getElementById("aluminum").style.display = "none";
            break;
        case 1:
            document.getElementById("pvc").style.display = "none";
            document.getElementById("steel").style.display = "block";
            document.getElementById("castIron").style.display = "none";
            document.getElementById("aluminum").style.display = "none";
            break;
        case 2:
            document.getElementById("pvc").style.display = "none";
            document.getElementById("steel").style.display = "none";
            document.getElementById("castIron").style.display = "block";
            document.getElementById("aluminum").style.display = "none";
            break;
        case 3:
            document.getElementById("pvc").style.display = "none";
            document.getElementById("steel").style.display = "none";
            document.getElementById("castIron").style.display = "none";
            document.getElementById("aluminum").style.display = "block";
            break;
        default:
            document.getElementById("pvc").style.display = "none";
            document.getElementById("steel").style.display = "none";
            document.getElementById("castIron").style.display = "none";
            document.getElementById("aluminum").style.display = "none";
    }
}

function calc_pipeSize(form) {
    var pipeMaterial = parseInt(form.pipeMaterial.value);
    var circumferenceUnits = parseFloat(form.circumferenceUnits.value);
    switch (pipeMaterial) {
        case 0:
            circumference = parseFloat(form.pvcOD.value) * Math.PI;
            break;
        case 1:
            circumference = parseFloat(form.steelOD.value) * Math.PI;
            break;
        case 2:
            circumference = parseFloat(form.castIronOD.value) * Math.PI;
            break;
        case 3:
            circumference = parseFloat(form.aluminumOD.value) * Math.PI;
            break;
        default:
            circumference = 0;
    }
    var precision = 2;
    switch (circumferenceUnits) {
        case 1:
            precision = 1;
            break;
        case 0.393700787:
            precision = 1;
            break;
        case 0.0393700787:
            precision = 0;
            break;
        default:
            precision = 2;
    }
    circumference = circumference / circumferenceUnits;
    form.circumference.value = circumference.toFixed(precision);
}

function calc_equivPipeSize(form) {
    var pipeType = parseInt(form.pipeType.value);
    var pipeSize = parseInt(form.pipeSize.value);
    var fittingNo = parseFloat(form.fittingNo.value);
    var tbl_coupling = ['1.5', '2.5', '3', '3', '4', '6', '7', '8', '11', '18', '24'];
    var tbl_runStTee = ['2.5', '3', '4', '5', '6', '8', '9', '11', '15', '21', '28'];
    var tbl_soTee = ['7', '9', '12', '15', '18', '24', '30', '36', '45', '70', '90'];
    var tbl_runReducedTee = ['3.5', '4.5', '6', '8', '9', '11', '14', '17', '24', '34', '45'];
    var tbl_elbow90Degree = ['3.5', '4.5', '6', '8', '9', '11', '14', '17', '24', '34', '45'];
    var tbl_elbow45Degree = ['1.5', '2', '3', '3.5', '4', '5', '7', '8', '10', '16', '20'];
    switch (pipeType) {
        case 0:
            equivFeet = tbl_coupling[pipeSize];
            break;
        case 1:
            equivFeet = tbl_runStTee[pipeSize];
            break;
        case 2:
            equivFeet = tbl_soTee[pipeSize];
            break;
        case 3:
            equivFeet = tbl_runReducedTee[pipeSize];
            break;
        case 4:
            equivFeet = tbl_elbow90Degree[pipeSize];
            break;
        case 5:
            equivFeet = tbl_elbow45Degree[pipeSize];
            break;
        default:
            equivFeet = 0;
    }
    var totalEquivFeet = fittingNo * equivFeet;
    form.totalEquivFeet.value = totalEquivFeet;
}

function calc_OpHrs(form) {
    var flowUnits = parseFloat(form.flowUnits.value);
    var areaUnits = parseFloat(form.areaUnits.value);
    var depthUnits = parseFloat(form.depthUnits.value);
    var OpHrsUnits = parseFloat(form.OpHrsUnits.value);
    var flow = parseFloat(form.flow.value) * flowUnits;
    var area = parseFloat(form.area.value) / areaUnits;
    var depth = parseFloat(form.depth.value) * depthUnits;
    var Ea = parseFloat(form.Ea.value) / 100;
    var tmpResult = 452.64 * depth * area / (flow * Ea) / OpHrsUnits;
    form.OpHrs.value = tmpResult.toFixed(1);
}

function calc_maxOpPressureTable(form) {
    var nominalSize = parseInt(form.nominalSize.value);
    var pipeType = parseInt(form.pipeType.value);
    var tbl_sch80PVC = ['850', '690', '630', '520', '470', '400', '420', '370', '320', '280', '250', '230', '230'];
    var tbl_sch40PVC = ['600', '480', '450', '370', '330', '280', '300', '260', '220', '180', '160', '140', '130'];
    var tbl_CL315 = ['315', '315', '315', '315', '315', '315', '315', '315', '315', '315', '315', '315', '315'];
    var tbl_CL200 = ['***', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200'];
    var tbl_CL160 = ['***', '***', '160', '160', '160', '160', '160', '160', '160', '160', '160', '160', '160'];
    var tbl_CL125 = ['***', '***', '***', '***', '***', '***', '***', '125', '125', '125', '125', '125', '125'];
    var tbl_sch40PE = ['190', '150', '140', '120', '100', '90', '100', '80', '70', '60', '++', '++', '++'];
    var tbl_annCopperM = ['430', '350', '295', '295', '290', '300', '235', '220', '215', '190', '200', '205', '205'];
    var tbl_hdCopperM = ['760', '610', '515', '515', '510', '450', '410', '385', '380', '335', '350', '355', '360'];
    var tbl_annCopperL = ['625', '495', '440', '385', '355', '315', '295', '275', '255', '215', '240', '240', '225'];
    var tbl_hdCopperL = ['1105', '875', '770', '680', '630', '555', '520', '490', '450', '385', '420', '425', '395'];
    var tbl_annCopperK = ['780', '750', '575', '465', '435', '380', '355', '340', '315', '305', '325', '330', '330'];
    var tbl_hdCopperK = ['1375', '1315', '1010', '820', '765', '665', '520', '605', '555', '540', '580', '585', '585'];
    switch (pipeType) {
        case 0:
            maxOpPressure = tbl_sch80PVC[nominalSize];
            break;
        case 1:
            maxOpPressure = tbl_sch40PVC[nominalSize];
            break;
        case 2:
            maxOpPressure = tbl_CL315[nominalSize];
            break;
        case 3:
            maxOpPressure = tbl_CL200[nominalSize];
            break;
        case 4:
            maxOpPressure = tbl_CL160[nominalSize];
            break;
        case 5:
            maxOpPressure = tbl_CL125[nominalSize];
            break;
        case 6:
            maxOpPressure = tbl_sch40PE[nominalSize];
            break;
        case 7:
            maxOpPressure = tbl_annCopperM[nominalSize];
            break;
        case 8:
            maxOpPressure = tbl_hdCopperM[nominalSize];
            break;
        case 9:
            maxOpPressure = tbl_annCopperL[nominalSize];
            break;
        case 10:
            maxOpPressure = tbl_hdCopperL[nominalSize];
            break;
        case 11:
            maxOpPressure = tbl_annCopperK[nominalSize];
            break;
        case 12:
            maxOpPressure = tbl_hdCopperK[nominalSize];
            break;
        default:
            maxOpPressure = 0;
    }
    form.maxOpPressure.value = maxOpPressure;
}


