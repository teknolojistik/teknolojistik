/**
 * @requires OpenLayers/Renderer/SVG.js
 */
OpenLayers.Renderer.SVGExtended = OpenLayers.Class(OpenLayers.Renderer.SVG, {

    eraseGeometry: function (geometry, featureId) {
        this.removeArrows(geometry);
        return OpenLayers.Renderer.SVG.prototype.eraseGeometry.apply(this, arguments);
    },

    drawFeature: function (feature, style) {
        if (feature.drawText) {
            //this.drawText(feature.id, style);
            //this.drawLineString()
        }
        return OpenLayers.Renderer.SVG.prototype.drawFeature.apply(this, arguments);
    },

    /**
     * Method: drawLineString
     * Method which extends parent class by also drawing an arrow in the middle
     * of the line to represent it's orientation.
     */
    drawLineString: function (node, geometry) {
        this.drawParelelLabels(geometry, node.style, node.id);
        return  OpenLayers.Renderer.SVG.prototype.drawLineString.apply(this, arguments);
        
        
    },
    /**
    * Method: drawText
    * This method is only called by the renderer itself.
    *
    * Parameters:
    * featureId - {String}
    * style -
    * location - {<OpenLayers.Geometry.Point>}
    */
    drawText: function (featureId, style, location) {
        var drawOutline = (!!style.labelOutlineWidth);
        // First draw text in halo color and size and overlay the
        // normal text afterwards
        if (drawOutline) {
            var outlineStyle = OpenLayers.Util.extend({}, style);
            outlineStyle.fontColor = outlineStyle.labelOutlineColor;
            outlineStyle.fontStrokeColor = outlineStyle.labelOutlineColor;
            outlineStyle.fontStrokeWidth = style.labelOutlineWidth;
            if (style.labelOutlineOpacity) {
                outlineStyle.fontOpacity = style.labelOutlineOpacity;
            }
            delete outlineStyle.labelOutlineWidth;
            this.drawText(featureId, outlineStyle, location);
        }

        //add this for rotation----------------------------------------
        var resolution = this.getResolution();
        var layer = this.map.getLayer(this.container.id);
        var feature = layer.getFeatureById(featureId);
        location = (feature.attributes.centroid ? feature.attributes.centroid : location);
        
        /////////////////////////-



        var x = ((location.x - this.featureDx) / resolution + this.left);
        var y = (location.y / resolution - this.top);

        var suffix = (drawOutline) ? this.LABEL_OUTLINE_SUFFIX : this.LABEL_ID_SUFFIX;
        var label = this.nodeFactory(featureId + suffix, "text");

        label.setAttributeNS(null, "x", x);
        label.setAttributeNS(null, "y", -y);

        //add this for rotation----------------------------------------
        if (style.angle || style.angle == 0) {
            var rotate = 'rotate(' + style.angle + ',' + x + "," + -y + ')';
            label.setAttributeNS(null, "transform", rotate);
            
        }
        
        /////////////////////////----------------------------------------


        if (style.fontColor) {
            label.setAttributeNS(null, "fill", style.fontColor);
        }
        if (style.fontStrokeColor) {
            label.setAttributeNS(null, "stroke", style.fontStrokeColor);
        }
        if (style.fontStrokeWidth) {
            label.setAttributeNS(null, "stroke-width", style.fontStrokeWidth);
        }
        if (style.fontOpacity) {
            label.setAttributeNS(null, "opacity", style.fontOpacity);
        }
        if (style.fontFamily) {
            label.setAttributeNS(null, "font-family", style.fontFamily);
        }
        if (style.fontSize) {
            label.setAttributeNS(null, "font-size", style.fontSize);
        }
        if (style.fontWeight) {
            label.setAttributeNS(null, "font-weight", style.fontWeight);
        }
        if (style.fontStyle) {
            label.setAttributeNS(null, "font-style", style.fontStyle);
        }
        if (style.labelSelect === true) {
            label.setAttributeNS(null, "pointer-events", "visible");
            label._featureId = featureId;
        } else {
            label.setAttributeNS(null, "pointer-events", "none");
        }
        var align = style.labelAlign || OpenLayers.Renderer.defaultSymbolizer.labelAlign;
        label.setAttributeNS(null, "text-anchor",
            OpenLayers.Renderer.SVG.LABEL_ALIGN[align[0]] || "middle");

        if (OpenLayers.IS_GECKO === true) {
            label.setAttributeNS(null, "dominant-baseline",
                OpenLayers.Renderer.SVG.LABEL_ALIGN[align[1]] || "central");
        }

        var labelRows = style.label.split('\n');
        var numRows = labelRows.length;
        while (label.childNodes.length > numRows) {
            label.removeChild(label.lastChild);
        }
        for (var i = 0; i < numRows; i++) {
            var tspan = this.nodeFactory(featureId + suffix + "_tspan_" + i, "tspan");
            if (style.labelSelect === true) {
                tspan._featureId = featureId;
                tspan._geometry = location;
                tspan._geometryClass = location.CLASS_NAME;
            }
            if (OpenLayers.IS_GECKO === false) {
                tspan.setAttributeNS(null, "baseline-shift",
                    OpenLayers.Renderer.SVG.LABEL_VSHIFT[align[1]] || "-35%");
            }
            tspan.setAttribute("x", x);
            if (i == 0) {
                var vfactor = OpenLayers.Renderer.SVG.LABEL_VFACTOR[align[1]];
                if (vfactor == null) {
                    vfactor = -.5;
                }
                tspan.setAttribute("dy", (vfactor * (numRows - 1)) + "em");
            } else {
                tspan.setAttribute("dy", "1em");
            }
            tspan.textContent = (labelRows[i] === '') ? ' ' : labelRows[i];
            if (!tspan.parentNode) {
                label.appendChild(tspan);
            }
        }

        if (!label.parentNode) {
            this.textRoot.appendChild(label);
        }
    }







});

/**
 * @requires OpenLayers/Renderer/Canvas.js
 */
OpenLayers.Renderer.CanvasExtended = OpenLayers.Class(OpenLayers.Renderer.Canvas, {

    eraseGeometry: function (geometry, featureId) {
        this.removeArrows(geometry);
        return OpenLayers.Renderer.Canvas.prototype.eraseGeometry.apply(this, arguments);
    },

    drawFeature: function (feature, style) {
        if (feature.geometry) {
            //this.removeArrows(feature.geometry);
        }
        return OpenLayers.Renderer.Canvas.prototype.drawFeature.apply(this, arguments);
    },

    /**
     * Method: drawLineString
     * Method which extends parent class by also drawing an arrow in the middle
     * of the line to represent it's orientation.
     */
    drawLineString: function (geometry, style) {
        this.drawParelelLabels(geometry, style);
        return OpenLayers.Renderer.Canvas.prototype.drawLineString.apply(this, arguments);
    }
});

/**
 * @requires OpenLayers/Renderer/VML.js
 */
OpenLayers.Renderer.VMLExtended = OpenLayers.Class(OpenLayers.Renderer.VML, {

    eraseGeometry: function (geometry, featureId) {
        this.removeArrows(geometry);
        return OpenLayers.Renderer.VML.prototype.eraseGeometry.apply(this, arguments);
    },

    drawFeature: function (feature, style) {
        if (feature.geometry) {
            this.removeArrows(feature.geometry);
        }
        return OpenLayers.Renderer.VML.prototype.drawFeature.apply(this, arguments);
    },

    /**
     * Method: drawLineString
     * Method which extends parent class by also drawing an arrow in the middle
     * of the line to represent it's orientation.
     */
    drawLineString: function (node, geometry) {
        this.drawParelelLabels(geometry, node._style);
        return OpenLayers.Renderer.VML.prototype.drawLineString.apply(this, arguments);
    }
});

OpenLayers.Renderer.prototype.removeArrows = function (geometry) {
    var i;
    // remove any arrow already drawn
    // FIXME may be a performance issue
    var children = this.vectorRoot.childNodes,
        arrowsToRemove = [];
    for (i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.id.indexOf(geometry.id + "_arrow") != -1) {
            arrowsToRemove.push(child);
        }
    }
    for (i = 0; i < arrowsToRemove.length; i++) {
        this.vectorRoot.removeChild(arrowsToRemove[i]);
    }
};
OpenLayers.Renderer.prototype.drawParelelLabels = function (geometry, style,featureId) {
    
        var pts = geometry.components;
        var prevArrow,
            distance, arrow;
        var prevVertex = pts[0];
        var nextVertex = pts[1];
        var x = (prevVertex.x + nextVertex.x) / 2;
        var y = (prevVertex.y + nextVertex.y) / 2;
        style.angle = this.getOrientation(prevVertex, nextVertex);
        var arrow = new OpenLayers.Geometry.Point(x, y);
        this.drawText(featureId, style,arrow);

        //for (i = 0, len = pts.length; i < len - 1; ++i) {
        //    var prevVertex = pts[i];
        //    var nextVertex = pts[i + 1];
        //    var x = (prevVertex.x + nextVertex.x) / 2;
        //    var y = (prevVertex.y + nextVertex.y) / 2;
        //    arrow = new OpenLayers.Geometry.Point(x, y);
        //    arrow.id = geometry.id + '_arrow_' + i;
        //    style = OpenLayers.Util.extend({}, style);
        //    style.graphicName = "arrow";
        //    style.pointRadius = 4;
        //    style.angle = this.getOrientation(prevVertex, nextVertex);
        //    style.graphicTitle = style.label;
        //    var textNode = new OpenLayers.Feature.Vector(arrow, style);
        //    this.drawText(featureId, style, arrow);


        //    //if (prevArrow) {
        //    //    var pt1 = map.getPixelFromLonLat(new OpenLayers.LonLat(arrow.x, arrow.y)),
        //    //        pt2 = map.getPixelFromLonLat(new OpenLayers.LonLat(prevArrow.x, prevArrow.y)),
        //    //        w = pt2.x - pt1.x,
        //    //        h = pt2.y - pt1.y;
        //    //    distance = Math.sqrt(w * w + h * h);
        //    //}
        //    //// don't draw every arrow, ie. ensure that there is enough space
        //    //// between two
        //    //if (!prevArrow || distance > 40) {
        //    //     //this.drawGeometry(arrow, style, arrow.id);
               
        //    //    //this.drawFeature(textNode,style);
        //    //    prevArrow = arrow;
        //    //}
        //}
        

    
};

OpenLayers.Renderer.prototype.getOrientation = function (pt1, pt2) {
    var x = pt2.x - pt1.x;
    var y = pt2.y - pt1.y;

    var rad = Math.acos(y / Math.sqrt(x * x + y * y));
    // negative or positive
    var factor = x > 0 ? 1 : -1;

    return Math.round(factor * rad * 180 / Math.PI);
};

OpenLayers.Renderer.symbol.arrow = [0, 2, 1, 0, 2, 2, 1, 0, 0, 2];