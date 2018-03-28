<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <Name>RH_SFC</Name>
    <UserStyle>
      <Name>RH_SFC</Name>
      <Title>RH Color style</Title>
      <Abstract>Color bins</Abstract>
      <FeatureTypeStyle>
        <Rule>
          <RasterSymbolizer>
            <Opacity>1.0</Opacity>
            <ColorMap type="intervals">
              <ColorMapEntry color="#993503" quantity="5" label=" 0 — &lt;5" />
              <ColorMapEntry color="#C35B0D" quantity="10" label=" 5 — &lt;10" />
              <ColorMapEntry color="#FE9929" quantity="20" label=" 10 — &lt;20" />
              <ColorMapEntry color="#FEC44F" quantity="30" label=" 20 — &lt;30" />
              <ColorMapEntry color="#FEE391" quantity="40" label=" 30 — &lt;40" />
              <ColorMapEntry color="#EBFAFB" quantity="50" label=" 40 — &lt;50" />
              <ColorMapEntry color="#D1E5F0" quantity="60" label=" 50 — &lt;60" />
              <ColorMapEntry color="#92C5DE" quantity="70" label=" 60 — &lt;70" />
              <ColorMapEntry color="#4393C3" quantity="80" label=" 70 — &lt;80" />
              <ColorMapEntry color="#2266AC" quantity="90" label=" 80	— 	&lt;90" />
              <ColorMapEntry color="#042F61" quantity="110" label=" 90	— 	100" />
            
            </ColorMap>
          </RasterSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>