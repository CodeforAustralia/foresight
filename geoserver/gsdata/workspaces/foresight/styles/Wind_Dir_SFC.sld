<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>Wind_Dir_SFC</Name>
    <UserStyle>
      <Name>Wind_Dir_SFC</Name>
      <Title>Wind_Dir Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#ffbf00" quantity="45" label="0  — &lt;45 - N - NE" />
              <ColorMapEntry color="#80ff00" quantity="90" label="45  — &lt;90 NE - E" />
              <ColorMapEntry color="#00ff40" quantity="135" label="90  — &lt;135 E - SE" />
              <ColorMapEntry color="#00ffff" quantity="180" label="135 – &lt; 180 SE - S" />
              <ColorMapEntry color="#0040ff" quantity="225" label="180 – &lt; 225 S - SW" />
              <ColorMapEntry color="#7f00ff" quantity="270" label="225 – &lt; 270 SW - W" />
              <ColorMapEntry color="#ff00bf" quantity="315" label="270 – &lt; 315 W - NW" />
              <ColorMapEntry color="#ff0000" quantity="361" label="315 – &lt; 360 NW - N" />
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>